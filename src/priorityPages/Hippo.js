// import {video} from '../../public/videos/ForBiggerBlazes.mp4'

export function Hippo() {
    return (
        <>
            <div>
                Welcome to priority hippos pages 
            </div>
            <video width={750} controls>
                <source src="../../videos/ForBiggerBlazes.mp4" type="video/mp4"/>
            </video>
        </>
    );
}