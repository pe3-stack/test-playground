import { useState, useCallback } from "react";

import Backdrop from '../../components/UI/Backdrop/Backdrop';

import "./CookieSection.scss";

function CookieSection(props) {
    const [showCookie, setShowCookie] = useState(true);

    const handleCookie = useCallback(() => setShowCookie(false),
        [setShowCookie]
    );

    let backdrop;

    if (showCookie) {
        backdrop = <Backdrop show={showCookie} clicked={setShowCookie} />;
    }

    return (
        <div>
            {backdrop}
            { showCookie ?
                <div className="cookie-section">
                    <div className="cookie-paragraph-container">
                        <p>Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy.</p>
                    </div>
                    <div className="cookie-button-container">
                        <div className="cookie-button" onClick={() => handleCookie()}>OK</div>
                    </div>
                </div>

                : null}
        </div>

    );
}

export default CookieSection;
