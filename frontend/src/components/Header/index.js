import React from 'react';
import { Link } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa'

import "./styles.css";

import Home from '../../img/Header/home.png';
import About from '../../img/Header/about.png';
import projects from '../../img/Header/projects.png';
import services from '../../img/Header/services.png';
import blog from '../../img/Header/blog.png'
import Contact from '../../img/Header/contact.png';


//export const Image = styled.img`
//  height: 25px;
//  max-width: 25px;
//  object-fit: cover;
//  margin: 5px;
//`;


export default function Header({children}){

    const redesocial = [
        {
          name: "Home",
          image: require("../../img/Footer/logo-twitter.png"),
          link: ""
        },
        {
            name: "About",
            image: require("../../img/Footer/logo-twitter.png"),
            link: ""
          },
          {
            name: "projects",
            image: require("../../img/Footer/logo-twitter.png"),
            link: ""
          },
          {
            name: "services",
            image: require("../../img/Footer/logo-twitter.png"),
            link: ""
          },
          {
            name: "Contact",
            image: require("../../img/Footer/logo-twitter.png"),
            link: ""
          },
    ];

    return(
        <div className="header-container">
            <header>
                <ul>
                    <li>
                        <Link className="button" to="/">
                            <img 
                                src={Home}
                                className="home" 
                                alt="Home" 
                                width="25" 
                                height="25"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="button" to="/about">
                                <img 
                                    src={About} 
                                    alt="About" 
                                    width="25" 
                                    height="25"
                                />
                        </Link>
                    </li>

                    <li>                
                        <Link 
                            className="button" to="/projects">
                                <img 
                                    src={projects} 
                                    alt="projects" 
                                    width="25" 
                                    height="25" 
                                />
                        </Link>
                    </li>
                    <li>                
                        <Link 
                            className="button" to="/services">
                                <img 
                                    src={services} 
                                    alt="Services" 
                                    width="25" 
                                    height="25" 
                                />
                        </Link>
                    </li>
                    <li>                
                        <Link 
                            className="button" to="/blog">
                                <img 
                                    src={blog} 
                                    alt="blog" 
                                    width="25" 
                                    height="25" 
                                />
                        </Link>
                    </li>
                    <li>                
                        <Link 
                            className="button" to="/contact">
                                <img 
                                    src={Contact} 
                                    alt="Contact" 
                                    width="25" 
                                    height="25" 
                                />
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

