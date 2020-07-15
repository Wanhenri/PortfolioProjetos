import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBlogger, FaHome, FaCode, FaAirbnb, FaCommentDots } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import "./styles.css";

import Home from "../../img/Header/home.png";
import About from "../../img/Header/about.png";
import projects from "../../img/Header/projects.png";
import services from "../../img/Header/services.png";
import blog from "../../img/Header/blog.png";
import Contact from "../../img/Header/contact.png";

export const Image = styled.img`
  height: 25px;
  max-width: 25px;
  object-fit: cover;
  margin: 5px;
`;


export default function Header({ children }) {
  const headerIcon = [
    {
      name: "Home",
      image: <FaHome color="white" size={26}/>,
      link: "",
      path: "/"
    },
    {
      name: "Blog",
      image: <FaBlogger color="white" size={26}/>,
      link: "",
      path: "/blog"
    },
    {
      name: "airbnb",
      image: <FaAirbnb color="white" size={26}/>,
      link: "",
      path: "/airbnb"
    },
    {
      name: "Contact",
      image: <GoMail color="white" size={26}/>,
      link: "",
      path: "/contact"
    },
  ];

  return (
    <div className="header-container">
      <header>
        <ul>
          {headerIcon.map((icons) =>(
            <li>
              <Link to={icons.path}>
                <Image key={icons.name} />{icons.image}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
