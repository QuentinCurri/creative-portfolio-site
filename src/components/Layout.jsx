import React from 'react';

import { BrowserRouter } from "react-router-dom";
import Routing from "../routes/Routing";

import Footer from './Footer ';
import Header from './Header';

const Layout = () => {
    return ( 
    <div>
        <BrowserRouter>
            <div>
            <Header />
              <div className="rager">
                <div className="main">
                  <Routing />
                </div>
              </div>
              <Footer />
            </div>
        </BrowserRouter>
    </div>
       );
}
 
export default Layout;