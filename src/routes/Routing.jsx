import React from "react";
import { Route, Routes, } from "react-router-dom";



import Home from '../pages/Home';
import About from '../pages/About';
import Photo from '../pages/Photo';
import Video from '../pages/Video';
import Code from '../pages/Code';
import VideoView from "../pages/VideoView";



const Routing = () => {

   
    return (

        
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/photo" element={<Photo/>} />
            <Route path="/video/:slug" element={<VideoView/>} />
            <Route path="/video" element={<Video/>} />
            <Route path="/dev" element={<Code/>} />
        </Routes>
     );
}

 
export default Routing;