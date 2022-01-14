import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import {CgClose} from 'react-icons/cg';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width:100%;
height:100%;
background: #161d31;
display: grid;
align-items: center;
top:0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '100%')};

`;

export const CloseIcon = styled(CgClose)`
color:#fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;


export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 1.3rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #ef4036;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #ef4036;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ef4036;
}
`