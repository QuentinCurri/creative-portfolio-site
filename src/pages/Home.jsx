import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';

const Home = () => {
    return ( 
    <Helmet title=''>
        <div className='home'>
            <div className="home-text">
            <h1>Quentin Curry</h1>
            <p className='home-text-tags'>Creative </p> <p className='home-text-divider'> / </p> 
            <p className='home-text-tags'>Producer </p> <p className='home-text-divider'> / </p>
            <p className='home-text-tags'> Student</p>
            <Link to={'/about'}>Enter</Link>
            </div>
            <div className="home-moving"></div>
            </div>
            </Helmet>
             );
}
 
export default Home;