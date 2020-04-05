import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

import Home from '../../img/Header/home.png';
import About from '../../img/Header/about.png';
import projects from '../../img/Header/projects.png';
import services from '../../img/Header/services.png';
import Contact from '../../img/Header/contact.png';

export default function Header({children}){
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
                                    alt="Projects" 
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

