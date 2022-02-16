import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const { pathname } = useLocation();

    if (pathname === '/') {
        return <div></div>
    }
    return ( 
    <div className='footer'>
        <div className="footer-container">
        <div className="footer-title">Quentin Curry</div>
        <div className="footer-email"><a href='mailto:qcurry@usc.edu'>qcurry@usc.edu</a></div>
        <div className="footer-iconLinks">
        <a href='https://www.instagram.com/quentincurri/' target={'_blank'} className='footer-iconLinks-tag'><i className="bx bxl-instagram"></i></a>
        <a href='https://github.com/QuentinCurri' target={'_blank'} className='footer-iconLinks-tag'><i className='bx bxl-github'></i></a>
        <a href='https://www.linkedin.com/in/qcurry/' target={'_blank'} className='footer-iconLinks-tag'><i className='bx bxl-linkedin'></i></a>
        </div>
        <div className="footer-copyright">©2021 Quentin Curry</div>
        </div>
        </div> 
        );
}
 
export default Footer;