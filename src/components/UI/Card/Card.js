import React from "react";

import "./Card.scss";

const Card = ({ image, children }) => {
    return (
        <div className="card">
            <div className="header-card" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="body-card">
                <p>{children}</p>
            </div>
            <div className="footer-card">
                <div className="card-button">
                    <a>READ MORE</a>
                </div>
            </div>
        
        </div >
    );
};

export default Card;
