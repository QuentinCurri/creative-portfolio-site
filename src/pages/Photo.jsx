import React from 'react';
import Helmet from '../components/Helmet';

import photos from '../assets/data/photos';
import ScrollButton from '../components/ScrollButton';
import PhotoCard from '../components/PhotoCard';

const Photo = () => {
    return ( 
    <Helmet title='Photo - '>
        <div>
            <div className="photo-content">
                <PhotoCard data={photos}/>
            </div>
            <ScrollButton />
            </div>
            </Helmet>
             );
}
 
export default Photo;