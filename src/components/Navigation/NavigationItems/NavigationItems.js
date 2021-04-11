import React from "react";

import "./NavigationItems.scss";

import NavigationItem from "./NavigationItem/NavigationItem";


const navigationItems = ({ clicked }) => {
  return (
    <ul className='navigationItems'>
        <div>
          <NavigationItem clicked={clicked}>we are</NavigationItem>
          <NavigationItem clicked={clicked}>we do</NavigationItem>
          <NavigationItem clicked={clicked}>careers</NavigationItem>
          <NavigationItem clicked={clicked}>contact</NavigationItem>
        </div>
    </ul>
  );
};

export default navigationItems