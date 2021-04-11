import React from "react";

import NavigationItems from '../Navigation/NavigationItems/NavigationItems'

import LogoFooterWhite from "../../assets/logo-playground-footer.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";


import "./Footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo-footer">
                <img src={LogoFooterWhite} alt="" />
            </div>
            <div className='nav-navigation-items-footer'>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
            <div className="social-icons">
                <a href=""><FontAwesomeIcon icon={faFacebook} color="#ffffff" size="lg" /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedin} color="#ffffff" size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} color="#ffffff" size="lg" /></a>
            </div>
        </div >
    );
};

export default Footer;
