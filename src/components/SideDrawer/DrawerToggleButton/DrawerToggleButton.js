import React from "react";
import "./DrawerToggleButton.scss";

const DrawerToggleButton = ({ toggleDrawer }) => (
    <a onClick={toggleDrawer} className='toggle-button' href="#0">
        <div className='toggle-button__line'></div>
        <div className='toggle-button__line'></div>
        <div className='toggle-button__line'></div>
    </a>
);

export default DrawerToggleButton;
