import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import ScrollButton from './ScrollButton';
import Youtube from 'react-youtube';



const VideoLayout = (props) => {
    const videofeed = props.videos;
    const textRef = useRef(null);
    const videoRef = useRef(null);

    const theatreMode = () => {
        videoRef.current.classList.add("dark");
        textRef.current.classList.add("dark");
    }

    const normalMode = () => {
        videoRef.current.classList.remove("dark");
        textRef.current.classList.remove("dark");
    }


    return ( 
        <div className="video">
            <div className="video-header">
            <img src={videofeed.img}></img>
            <h1 className="video-header-title">{videofeed.title}</h1>
            </div>
            <div className="video-subheader">
                <div className="video-subheader-thirds">
                    <p>Role</p>
                    <br />
                    {videofeed.role}
                </div>
                <div className="video-subheader-thirds">
                    <p>Year of Production</p>
                    <br />
                    {videofeed.year}
                </div>
                <div className="video-subheader-thirds">
                    <p>Designer Tools</p>
                    <br />
                    {videofeed.tools}
                </div>
            </div>
            <div className="video-main" ref={videoRef}>
                <Youtube
                videoId={videofeed.src}
                id='video'
                className='video-main-player'
                title='Youtube video player'
                onPlay={theatreMode}
                onEnd={normalMode}
                />
                <p ref={textRef} dangerouslySetInnerHTML={{__html: videofeed.desc}}></p>
            </div>
            <ScrollButton />
        </div>
     );
}

VideoLayout.propTypes = {
    videofeed: PropTypes.object.isRequired,
};
 
export default VideoLayout;