import React from "react";

import "./NavigationItems.scss";

import NavigationItem from "./NavigationItem/NavigationItem";


const navigationItems = ({ clicked }) => {
  return (
    <ul className='navigationItems'>
      <div>
        <NavigationItem clicked={clicked} link='/#weare'>contact us</NavigationItem>
        <NavigationItem clicked={clicked} link='/#careers'>careers</NavigationItem>
        <NavigationItem clicked={clicked} link='/#contactus'>we are</NavigationItem>
        <NavigationItem clicked={clicked} link='/#wedo'>we do</NavigationItem>
      </div>
    </ul>
  );
};

export default navigationItems