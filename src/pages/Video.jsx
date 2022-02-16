import React from 'react';
import Fade from 'react-reveal/Fade';

import Helmet from '../components/Helmet';
import ScrollButton from '../components/ScrollButton';
import VideoCard from '../components/VideoCard';


import videoData from '../assets/data/videos';

const Video = (props) => {

    const allVideos = videoData.getallVideos();

    console.log(props)
    return ( 
    <Helmet title='Video - '>
        <div className='video'>
            <div className="video-content">
                {allVideos.map((item, index) => (
                    <Fade bottom>
                    <div className="video-individual">
                    <VideoCard
                    key={index}
                    thumb={item.img}
                    title={item.title}
                    year={item.year}
                    slug={item.slug}
                    id={item.id}
                    />
                    </div>
                    </Fade>
                ))}
            </div>
            <ScrollButton />
            </div>
            </Helmet> 
            );
}
 
export default Video;