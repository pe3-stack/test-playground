import React from "react";

import "./NavigationItems.scss";

import NavigationItem from "./NavigationItem/NavigationItem";


const navigationItems = ({ clicked }) => {
  return (
    <ul className='navigationItems'>
      <div>
        <NavigationItem clicked={clicked} link='/playground-test/#contactus'>contact us</NavigationItem>
        <NavigationItem clicked={clicked} link='/playground-test/#careers'>careers</NavigationItem>
        <NavigationItem clicked={clicked} link='/playground-test/#weare'>we are</NavigationItem>
        <NavigationItem clicked={clicked} link='/playground-test/#wedo'>we do</NavigationItem>
      </div>
    </ul>
  );
};

export default navigationItems