import React from "react";

import "./Backdrop.scss";

const backdrop = ({ show, clicked }) =>
    show ? <div onClick={clicked} className='backdrop' ></div> : null;

export default backdrop;
