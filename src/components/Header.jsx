import React, {useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';



import Logo from '../assets/images/website-logo.png';

const navbar = [
    {
        display: "About",
        path: "/about"
    },
    {
        display: "Photo",
        path: "/photo"
    },
    {
        display: "Video",
        path: "/video"
    },
    {
        display: "Dev",
        path: "/dev"
    }
]

const Header = () => {

    const { pathname } = useLocation();
  const activeNav = navbar.findIndex((e) => e.path === pathname);

    const rightMenu = useRef(null);
    const headerRef = useRef(null);

  const toggleMenu = () => rightMenu.current.classList.toggle("active");



  if (pathname === '/') {
      return <div></div>
  }


    return (
        <div className="header" 
        ref={headerRef}
          >
            <div className="container">
                <div className="logo">
                    <Link to={'/'}>
                        <img
                        src={Logo}
                        alt='logo'
                        />
                    </Link>
                </div>
                <div className="header-menu">
                    <div className="header-menu-mobile" onClick={toggleMenu}>
                        <i className='bx bx-menu-alt-right'></i>
                    </div>
                    <div className="header-menu-right" ref={rightMenu}>
                        <div className="header-menu-right-close" onClick={toggleMenu}>
                            <i className='bx bx-chevron-right'></i>
                        </div>
                        {navbar.map((item, index) => (
                            <div 
                            key={index} 
                            className={`header-menu-item
                            header-menu-right-item ${index === activeNav ? "active" : ""}`}
                            onClick={toggleMenu}
                            >
                                <Link to={item.path} className={`${index === activeNav ? "active" : ""}`}>
                                    <span className={`header-menu-item-link`}>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
};

 
export default Header;