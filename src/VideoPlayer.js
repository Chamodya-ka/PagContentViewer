import { Suspense } from "react";

import { RandomVideoPlayer } from "./randomVideoPlayer/RandomVideoPlayer";

export function VideoPlayer({tvName}){
  return(
    <Suspense fallback={<div>LOADING</div>}>
      <RandomVideoPlayer tvName={tvName}/>
    </Suspense>
  );
}