import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { DiGithubBadge } from 'react-icons/di';
import { BsCardChecklist, BsKanban } from 'react-icons/bs';
import { AiOutlineBook } from 'react-icons/ai';
import { FaIdCard } from 'react-icons/fa';


import Resume from '../../pages/Resume';
import BragDocument from '../../pages/BragDocument';
import Publicacoes from '../../pages/Publicacoes'


const SidebarContainer = styled.div`
display: flex;
flex-direction: column;
align-items: left;
height: 100vh;
width: 270px;
background-color: #252529;
color: #fff;
`;

const SidebarMenu = styled.ul`
display: flex;
align-items: left;
flex-direction: column;
list-style: none;
width: 100%;
padding: 0px 30px;
`;

const SidebarMenuItem = styled.li`
display: flex;
height: 40px;
width: 100%;
padding-left: 30px;
align-items: left;
flex-direction: column;
justify-content: space-between;

height: 40px;
&:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
}
`;

const Icon = styled.svg`
    width: 30px;
    height: 30px;   
`;

const SidebarMenuItemLabel = styled.p`
    margin-top: 0;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-size: 14px;
    line-height: 1.3;
    font-weight: 500;
    color: #ffffff;
    font-weight: 600;
    text-align: left;
    padding: 12px 0px 10px;
    display: flex;
    align-items: center;      
`;
const MenuLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16px;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    height: 45px;
    color: #fff;
    margin: 30px 30px 30px 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2e2e33;
`;

const logo = require("../../img/Sidebar/wanderson.jpg");

export const Cracha = styled.section`
width: 170px;
height: 250px;
border-radius: 50px;
background-size: cover;
background-image: url(${logo});
margin-bottom:20px;
`;

const Name = styled.p`
display: flex;

align-items: center;
justify-content: center;
text-align:left;
font-size: 18px;
`;

export const Strong = styled.strong`
color: var(--color-zero);
font-size: 1.5em;

`;


export default function SideBar() {

    const menuSideBarItem = [
        {
            id: 1,
            name: "Resumo" ,
            description: "Um curriculo resumido",
            icon: <FaIdCard size={26}/>,
            exact: true,
            component: Resume,
            path: "/resume"
    },
        {
            id: 2,
            name: "Metas" ,
            description: "Metas estabelecidas",
            icon: <BsKanban size={26}/>,
            link:"https://trello.com/b/mO8WDqh4/cursos"
        },
        {
            id: 3,
            name: "GitHub" ,
            description: "Repositorio de projetos",
            icon: <DiGithubBadge size={26}/>,
            link:"https://github.com/Wanhenri"
        },
        {
            id: 4,
            name: "Publicações" ,
            description: "Publicações desenvolvidas no decorrer da vida",
            icon: <AiOutlineBook size={26}/>,
            exact: true,
            component: Publicacoes ,
            path: "/publicacoes"
        },
        {
            id: 5,
            name: "Brag Document" ,
            description: "descrever o que é isso",
            icon: <BsCardChecklist size={26}/>,
            exact: true,
            component: BragDocument ,
            path: "/bragdocument"
        },
    ];

    return (
        <SidebarContainer>
            <SidebarMenu>
                <MenuLogo>
                    {" "}
                    <Icon >
                    <path
                        width="20px"
                        height="20px"
                        
                        fill="white"                        
                        id="path-1"/>
                    </Icon>
                        <Name><Strong>W</Strong>anderson</Name><Name><Strong>S</Strong>antos</Name>
                </MenuLogo>
                <Cracha />

                <SidebarMenuItem>              
                    {menuSideBarItem.map((Itens) =>(
                     <li><a href={Itens.link} target="_blank" rel="noopener noreferrer">
                        <Link to={Itens.path}>
                            <SidebarMenuItemLabel key={Itens.id}>
                                <Icon>{Itens.icon}</Icon> {Itens.name}
                            </SidebarMenuItemLabel>
                        </Link>
                     </a></li>
                    ))}                    
                </SidebarMenuItem>                
            </SidebarMenu>
        </SidebarContainer>
    )
}