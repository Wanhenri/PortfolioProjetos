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
                                <Link  to="/sitemap">
                                    Sitemap
                                </Link>
                            </span>
                        </div>   
                        <li><Link><img src={LogoTwitter} alt="logo twitter"/></Link></li>
                        <li><Link><img src={LogoFacebook} alt="logo Facebook"/></Link></li>
                        <li><Link><img src={LogoInstagram} alt="logo Instagram"/></Link></li>
                        <li><Link><img src={LogoLinkedin} alt="logo Linkedin"/></Link></li>
                        <li><Link><img src={LogoReddit} alt="logo Reddit"/></Link></li>
                        <li><Link><img src={LogoSkype} alt="logo Skype"/></Link></li>
                    </ul>

                </div>
            </footer>            
        </div>
    );
}