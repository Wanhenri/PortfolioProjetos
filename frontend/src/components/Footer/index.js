import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

import "./styles.css";

export const Image = styled.img`
  flex: 1 0 auto;
  height: 130px;
  max-width: 100px;
  object-fit: cover;
  margin: 5px;
`;


export default function Footer() {

    const redesocial = [
        {
          name: "LogoTwitter",
          image: require("../../img/Footer/logo-twitter.png"),
          link: ""
        },
        {
            name: "LogoFacebook",
            image: require("../../img/Footer/logo-facebook.png"),
            link: "https://www.facebook.com/profile.php?id=100028393600095"
          },
        {
            name: "LogoInstagram",
            image: require("../../img/Footer/logo-instagram.png"),
            link: "https://www.instagram.com/wan_henri/"
          },
          {
            name: "LogoLinkedin",
            image: require("../../img/Footer/logo-linkedin.png"),
            link: "https://www.linkedin.com/in/wandersonhenrique/"
          },
          {
            name: "LogoReddit",
            image: require("../../img/Footer/logo-reddit.png"),
            link: ""
          },
          {
            name: "LogoSkype",
            image: require("../../img/Footer/logo-skype.png"),
            link: ""
          },
    ];

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

                        {redesocial.map((icones) => (
                           <li> <a href={icones.link} target="_blank" rel="noopener noreferrer">
                            <Image key={icones.name} src={icones.image} />
                        </a></li>
                        ))}
                    </ul>

                </div>
            </footer>            
        </div>
    );
}