import React from 'react';
import Helmet from '../components/Helmet';
import Fade from 'react-reveal/Fade';
import ScrollButton from '../components/ScrollButton';


const About = () => {
    return ( 
    <Helmet title='About - '>
        <div className="about">
            <div className="about-picture">
                <Fade left>
                <img src="https://i.ibb.co/rQMh7Bm/test.jpg" alt="test"></img>
                </Fade>
            </div>
            <div className="about-bio">
                <div className="about-bio-title">
                    Quentin Curry
                </div>
                <div className="about-bio-section">
                <div className="about-bio-text">
                I am a creative who strives to engage user audiences with multimedia experiences. 
                Originally from Arizona, I moved to Los Angeles to enroll in the <a href="https://www.marshall.usc.edu/current-students/academic-advising/academic-programs/joint-programs/business-cinematic-arts-bca" target={'_blank'}>Business of Cinematic Arts (BCA)</a> 
                &nbsp;program at the University of Southern California. 
                Along the way, I learned the process of the entertainment industry and the role of a producer.
                </div>
                <div className="about-bio-text">
                My drive for creative marketing and displaying unique stories reaches highly engaged audiences. 
                I&apos;ve previously worked with talented designers and developers to bring forth our startup, Sourcerer, which was headlined at the premier startup organization, <a href="https://usclavalab.org/" target={'_blank'}>Lavalab</a>.
                </div>
                <div className="about-bio-text">
                Outside of academics, I enjoy weightlifting, playing sports, and visiting local museums. 
                My dream is to continue to lead teams and create immersive film experiences that the average consumer would be unaware of.
                </div>
                <div className="about-bio-text">
                Currently, I work as a development intern at <a href="https://www.winterlightpictures.com/" target={'_blank'}>Winterlight Pictures</a>.
                </div>
                <div className="about-bio-icons">
                    <a href='https://www.instagram.com/quentincurri/' target={'_blank'} className='footer-iconLinks-tag'><i className="bx bxl-instagram"></i></a>
                    <a href='https://github.com/QuentinCurri' target={'_blank'} className='footer-iconLinks-tag'><i className='bx bxl-github'></i></a>
                    <a href='https://www.linkedin.com/in/qcurry/' target={'_blank'} className='footer-iconLinks-tag'><i className='bx bxl-linkedin'></i></a>
                    <br />
                    <div className="about-bio-icons-email"><a href='mailto:qcurry@usc.edu' className='email'>Email</a></div>
                    <a rel='noopener' href="https://drive.google.com/file/d/1yrg7hD2lunHRL2tqB7oaRSmnw_wbZJnU/view?usp=sharing" target={'_blank'}><button>Resume</button></a>
                </div>
                </div>
            </div>
        </div>
        <ScrollButton />
    </Helmet>
     );
}
 
export default About;