import React, { useState, useEffect, useCallback } from "react";

import "../Toolbar/Toolbar.scss";

import LogoWhite from "../../assets/logo-playground-white.png";
import LogoBlack from "../../assets/logo-playground-black.png";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton'

import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const Toolbar = ({ onToggleClick, clicked }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [color, setColor] = useState('transparent');
  const [width, setWidth] = useState(window.innerWidth);


  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);

    console.log(width);
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsScroll((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    if (isScroll) {
      setColor('transparent')
    } else {
      setColor('black');
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [prevScrollPos, isScroll, color, width, handleScroll, handleWindowSizeChange]);

  return (
    <header className='toolbar' style={width > 1000 ? { backgroundColor: color } : {}}>
      <nav className='nav-toolbar' >
        <div className="nav-logo">
          <img className="logo-black" src={LogoBlack} alt="" />
          <img className="logo-white" src={LogoWhite} alt="" />
        </div>
        <DrawerToggleButton toggleDrawer={onToggleClick} />

        <div className='nav-navigation-items'>
          <nav>
            <NavigationItems clicked={clicked} />
          </nav>
        </div>
      </nav>

    </header>
  );
};

export default Toolbar;