import React from 'react'
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
    align-items: center;
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;
        cursor: pointer;
    }
`;

const Icon = styled.svg`
        width: 20px;
        height: 20px;
`

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
        padding: 12px 0px;
       
`
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
`

export default function SideBar() {
    return (
        <SidebarContainer>
            <SidebarMenu>
                <MenuLogo>
                    {" "}
                    <Icon viewBox="0 0 20 20">
                    <path
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 17"
                        fill="white"
                        d="M4.23832506,4.349694 L5.39932506,7.16397019 L2.73332506,7.16397019 L4.23832506,4.349694 Z M13.5843251,9.22420166 L16.5773251,9.22420166 L11.0983251,15.2483185 L13.5843251,9.22420166 Z M8.74132506,15.2627401 L3.10032506,9.22420166 L6.24932506,9.22420166 L8.74132506,15.2627401 Z M7.56832506,7.16397019 L6.29332506,4.07362298 L13.5403251,4.07362298 L12.2653251,7.16397019 L7.56832506,7.16397019 Z M11.4153251,9.22420166 L9.91732506,12.8553596 L8.41832506,9.22420166 L11.4153251,9.22420166 Z M17.2603251,7.16397019 L14.4343251,7.16397019 L15.6113251,4.3105496 L17.2603251,7.16397019 Z M19.7873251,7.43592074 L16.9333251,2.26783009 C16.8173251,2.08652972 16.6613251,2 16.4823251,2 C16.2933251,2 16.0773251,2.0133915 15.8533251,2.0133915 L4.18832506,2.0133915 C3.96732506,2.0133915 3.75432506,2.00515058 3.56732506,2.00515058 C3.37732506,2.00515058 3.21332506,2.07313822 3.09432506,2.26783009 L0.198325064,7.75216627 C-0.107674936,8.25383264 -0.0556749356,8.8337878 0.327325064,9.27570745 L9.02132506,18.55499 C9.27732506,18.8516633 9.63032506,19 9.98332506,19 C10.3423251,19 10.7013251,18.848573 10.9593251,18.5436587 L19.6813251,9.01508817 C20.0633251,8.56389747 20.1063251,7.93449676 19.7873251,7.43592074 L19.7873251,7.43592074 Z"
                        id="path-1"/>
                    </Icon>
                        designtech
                </MenuLogo>
                <SidebarMenuItem>
                    <Icon></Icon>
                    <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Icon></Icon>
                    <SidebarMenuItemLabel>Service Alerts</SidebarMenuItemLabel>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Icon></Icon>
                    <SidebarMenuItemLabel>Customer Tickets</SidebarMenuItemLabel>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Icon></Icon>
                    <SidebarMenuItemLabel>Archive</SidebarMenuItemLabel>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Icon></Icon>
                    <SidebarMenuItemLabel>Library</SidebarMenuItemLabel>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Icon></Icon>
                    <SidebarMenuItemLabel>Deliveries</SidebarMenuItemLabel>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContainer>
    )
}