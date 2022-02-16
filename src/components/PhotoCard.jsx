import React from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import Fade from 'react-reveal/Fade';

import photos from '../assets/data/photos';
import { useCallback, useState } from 'react';

const PhotoCard = () => {

    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    return ( 
    <div>
      <Fade bottom>
      <section>
        <Gallery
        photos={photos}
        direction={"column"}
        onClick={openLightbox}
        margin={7} />
        </section>
        </Fade>
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(z => ({
                        ...z,
                        srcset: z.srcSet,
                        caption: z.title
                    }))}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
    </div>
    );
}
 


export default PhotoCard;