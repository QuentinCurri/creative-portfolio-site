import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from "prop-types";




const VideoCard = (props) => {

    const propsTest = () => console.log(props);
    return ( 
        <div className="video-card">
            <Link to={`/video/${props.slug}`} 
            onClick={propsTest}
            state={props}
            >
                <div className="video-card-image">
                    <img src={props.thumb} alt="" />
                    <div className="video-card-overlay">
                        <div className="video-card-title">
                            {props.title}
                            <br />
                            {props.year}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
     );
};

VideoCard.propTypes = {
    thumb: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};
 
export default VideoCard;