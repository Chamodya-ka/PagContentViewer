import {RetrieveAllVideosList} from './retrieveAllVideos'

export function retrieveVideosFromDirectory({directory}){
    const fileList = RetrieveAllVideosList(directory);
    // TODO: download and cache videos
} 