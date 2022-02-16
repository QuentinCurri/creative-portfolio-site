import React, { useState } from 'react';

import upLogo from '../assets/svg/solid/bxs-chevron-up-circle.svg'

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true)
        } else if (scrolled <= 100) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return ( 
    <div className="button">
        <img
        src={upLogo}
        className='up-arrow'
        alt='up Logo'
        onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}}
        />
    </div> );
}
 
export default ScrollButton;