import React from "react";

/* CSS */
import "./WeAre.scss";

import banner_we_are from "../../assets/banner-we-are.jpg";

function WeAre(props) {
    return (
        <div className="we-are" id='weare'>
            <div className="banner-we-are" style={{ backgroundImage: `url(${banner_we_are})` }}></div>
            <div className="banner-we-are-desc">
                <div className="desc-we-are">
                    <h1>we are.</h1>
                    <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
                    <div className="the-players-button">THE PLAYERS ></div>
                </div>
            </div>
        </div>
    );
}

export default WeAre;
