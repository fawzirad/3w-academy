import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>Notre école</SidebarLink>
                    <SidebarLink to="formation" onClick={toggle}>Formation</SidebarLink>
                    <SidebarLink to="metiers" onClick={toggle}>Métiers</SidebarLink>
                    <SidebarLink to="technologies" onClick={toggle}>Technologies</SidebarLink>
                    <SidebarLink to="debouches" onClick={toggle}>Débouchés</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
            
        
    );
};

export default Sidebar;
