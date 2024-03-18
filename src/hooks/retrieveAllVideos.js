import { useState } from "react";

export function RetrieveAllVideosList({directory=null}){
    const [fileList,setFileList] = useState()
    fetch("192.168.1.13:8081")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setFileList(data);
        })
        .catch((err) => {
            console.log(err)
        });
    return fileList
}