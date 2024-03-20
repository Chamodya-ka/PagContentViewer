import {useEffect, useMemo, useRef, useState} from "react";
import useSWR from 'swr'

import {tvVideoMapping} from "../commonData/tvVideoMapping";
import {RetrieveAllVideosList} from "../hooks/retrieveAllVideos";

function handleOnEnded({currentVideo, maxCount}) {
    console.log(currentVideo)
    currentVideo.set((currentVideo.get+1)%maxCount);
}

function VideoLooper({JSONData,...props}) {
    const videoRef = useRef();
    const [currentVideoCount, setCurrentVideoCount] = useState(0);
    var maxCount = Object.keys(JSONData).length;
    const videoDir = tvVideoMapping.find(mapping => mapping.tvName == props.tvName).directory;
    console.log(currentVideoCount," Video", JSONData[currentVideoCount])
    const VideoContent = useMemo(()=>{
            return <source src={`http://localhost:8080/resources/${videoDir}/${JSONData[currentVideoCount]}`} type="video/mp4"/>
    },[currentVideoCount])

    return (
        <>
            <div>
                {props.tvName} - all videos
            </div>
            <video key={currentVideoCount} onEnded={()=>handleOnEnded({currentVideo:{set:setCurrentVideoCount, get:currentVideoCount}, maxCount})} ref={videoRef} width={750} controls autoPlay>
                {VideoContent}
            </video>
           
        </>
    );
}
             {/* <video onEnded={()=>handleOnEnded({get:currentVideoCount, set:setCurrentVideoCount})} ref={videoRef} width={750} controls autoPlay> */}
                {/* <source src={`http://localhost:8080/resources/${videoDir}/${JSONData[currentVideoCount]}`} type="video/mp4"/> */}
                {/* <source src={`http://localhost:8080/resources/all/${JSONData[currentVideoCount]}`} type="video/mp4"/> */}
             {/* </video> */}
            

function GetJSONList(props) {
    const fetcher = (...args) => fetch(...args).then(res => res.json());    
    const { data, error, isLoading } = useSWR(`http://localhost:8081/?folderName=${props.tvName}`, fetcher)
    if (error) return <div>Error</div>;
    if (isLoading) return <div>Loading</div>;
    return <VideoLooper JSONData={JSON.parse(data)} {...props}/>;
}

export function RandomVideoPlayer({tvName}) {

    return(
        <GetJSONList tvName={tvName}/>
    );
    
    
    // const [videoListJSON,setVideoListJSON] = useState([])
    // const [retrievedList, setRetrievedList] = useState(false)
    
    // RetrieveAllVideosList().then( res => {setVideoListJSON(res);setRetrievedList(true)});
    // useEffect(()=>{
    //     console.log(videoListJSON);
    // },[retrievedList])
    // setVideoListJSON(getJSONList());

    // console.log(videoListJSON[0])
    // console.log(`http://localhost:8080/resources/${videoDir}/${videoListJSON[currentVideoCount]}`)
    // console.log(JSON.parse(videoListJSON.json),"HERE")
    // console.log(`localhost:8080/${videoDir}/${videoListJSON.$(currentVideoCount)}.mp4`);

    
}