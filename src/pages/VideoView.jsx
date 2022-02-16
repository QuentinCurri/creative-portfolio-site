import React from 'react';
import {  useParams } from 'react-router-dom';

import videoData from '../assets/data/videos';
import Helmet from '../components/Helmet';
import VideoLayout from '../components/VideoLayout';



const VideoView = () => {

    const allVideos = videoData.getallVideos();
    const slug = useParams();
    const videos = allVideos.find(o => o.slug === slug.slug);



    return ( 
        <Helmet title={videos.title + " - "}>
            <div className="videoview">
                <VideoLayout videos={videos} />
            </div>
        </Helmet>
     );

}
 
export default VideoView;