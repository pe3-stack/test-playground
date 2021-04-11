import React, { useState, useCallback } from "react";

/* CSS */
import "./Header.scss";

import slide_hello from "../../assets/slide-hello.jpg";
import slide_circle from "../../assets/slide-circle.jpg";
import slide_play from "../../assets/slide-play.jpg";

import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/UI/Backdrop/Backdrop';

import Toolbar from "../../components/Toolbar/Toolbar";
import Slider from "../../components/Slider/Slider";

function Header() {

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawer = useCallback(() => setShowSideDrawer((value) => !value),
    [setShowSideDrawer]
  );

  let sideDrawer;
  let backdrop;

  if (showSideDrawer) {
    backdrop = <Backdrop show={showSideDrawer} clicked={toggleSideDrawer} />;
    sideDrawer = <SideDrawer show={showSideDrawer} toggle={toggleSideDrawer} clicked={toggleSideDrawer} />;
  }
  return (
    <div className="header-section">
      <Toolbar onToggleClick={toggleSideDrawer} />
      {sideDrawer}
      {backdrop}
      <Slider images={[slide_hello, slide_circle, slide_play]}>
        <div className="slider-content">
          <h1>lorem ipsum.</h1>
          <p>Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.</p>
        </div>
      </Slider>

    </div>
  );
}

export default Header;
