import React from 'react';
import { Link } from 'react-router-dom'

import "./styles.css";

import LogoTwitter from '../../img/Footer/logo-twitter.png';
import LogoFacebook from '../../img/Footer/logo-facebook.png';
import LogoInstagram from '../../img/Footer/logo-instagram.png';
import LogoLinkedin from '../../img/Footer/logo-linkedin.png';
import LogoReddit from '../../img/Footer/logo-reddit.png';
import LogoSkype from '../../img/Footer/logo-skype.png';



export default function Footer() {
    return (
        <div className="footer-container">   
                 
            <footer>
                <div> 
                    <ul>   
                        <div>
                            <span>All Rights Reserved © 2020.&nbsp;  
                                <Link className="button" to="/sitemap">
                                    Sitemap
                                </Link>
                            </span>
                        </div>   
                        <li><img src={LogoTwitter} alt="logo twitter"/></li>
                        <li><img src={LogoFacebook} alt="logo Facebook"/></li>
                        <li><img src={LogoInstagram} alt="logo Instagram"/></li>
                        <li><img src={LogoLinkedin} alt="logo Linkedin"/></li>
                        <li><img src={LogoReddit} alt="logo Reddit"/></li>
                        <li><img src={LogoSkype} alt="logo Skype"/></li>
                    </ul>

                </div>
            </footer>            
        </div>
    );
}