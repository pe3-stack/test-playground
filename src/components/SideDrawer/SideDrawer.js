import React from "react";

import "./SideDrawer.scss";

import NavigationItems from '../Navigation/NavigationItems/NavigationItems'

export default function SideDrawer({ clicked }) {
    return (
        <nav className='sidedrawer__open'>
            <NavigationItems clicked={clicked} />
        </nav>
    );
}
