import {useEffect, useRef, useState} from "react";

import {tvVideoMapping} from "../commonData/tvVideoMapping";
import {RetrieveAllVideosList} from "../hooks/retrieveAllVideos";

function handleOnEnded(currentVideo) {
    console.log("ended")
    currentVideo.set(currentVideo.get+1);
}

export function RandomVideoPlayer({tvName}) {
    const videoRef = useRef();

    const [currentVideoCount, setCurrentVideoCount] = useState(0);
    const [videoListJSON,setVideoListJSON] = useState([])

    const videoDir = tvVideoMapping.find(mapping => mapping.tvName == tvName).directory;
    RetrieveAllVideosList(setVideoListJSON)
    console.log(videoListJSON[0])
    console.log(`http://localhost:8080/resources/${videoDir}/${videoListJSON[currentVideoCount]}`)
    // console.log(JSON.parse(videoListJSON.json),"HERE")
    // console.log(`localhost:8080/${videoDir}/${videoListJSON.$(currentVideoCount)}.mp4`);

    return (
        <>
            <div>
                {tvName} all videos
            </div>
            <video onEnded={()=>handleOnEnded({get:currentVideoCount, set:setCurrentVideoCount})} ref={videoRef} width={750} controls autoplay>
                <source src={`http://localhost:8080/resources/${videoDir}/${videoListJSON[currentVideoCount]}`} type="video/mp4"/>
                {/* <source src={`http://localhost:8080/resources/all/${videoListJSON[currentVideoCount]}`} type="video/mp4"/> */}
            </video>
        </>
    );
}