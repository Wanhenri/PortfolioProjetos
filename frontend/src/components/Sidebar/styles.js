import styled from "styled-components";

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
