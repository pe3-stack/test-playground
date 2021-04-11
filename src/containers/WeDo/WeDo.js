import React from "react";

/* CSS */
import "./WeDo.scss";

import banner_we_do from "../../assets/banner-we-do.jpg";

function WeDo(props) {
    return (
        <div className="we-do" id='wedo'>
            <div className="banner-we-do" style={{ backgroundImage: `url(${banner_we_do})` }}></div>
            <div className="banner-we-do-desc">
                <div className="desc-we-do">
                    <h1>we do.</h1>
                    <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
                    <div className="the-projects-button">THE PROJECTS ></div>
                </div>
            </div>
        </div>
    );
}

export default WeDo;
