import React, { useState, useCallback } from "react";

/* CSS */
import "./Careers.scss";

import banner_careers from "../../assets/banner-carrers.jpg";

function Careers(props) {
    return (
        <div className="careers">
            <div className="banner-careers" style={{ backgroundImage: `url(${banner_careers})` }}></div>
            <div className="banner-careers-desc">
                <div className="desc-careers">
                    <h1>careers.</h1>
                    <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
                    <div className="the-positions-button">THE POSITIONS ></div>
                </div>
            </div>
        </div>
    );
}

export default Careers;
