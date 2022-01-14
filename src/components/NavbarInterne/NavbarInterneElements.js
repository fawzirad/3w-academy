import styled from "styled-components";
import { Link  } from "react-router-dom";




export const NavInterne = styled.nav`
background: #ef4036;
height: 80px;
margin-top: -80px;
display:flex;
justify-content: center;
align-items:center;
font-size: 14px;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;

export const NavbarInterneContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavInterneLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  
`;

export const MobileInterneIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavInterneMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;



export const NavInterneItem = styled.li`
  height: 80px;
`;

export const NavInterneLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover, &:active {
    border-bottom: 2px solid #fff;
  }
`;

export const NavInterneBtn = styled.nav`
display:flex;
align-items:center;
justify-content: space-around;
width:70px;

@media screen and (max-width:768px){
    display:none;
}
`

export const NavInterneBtnLink = styled(Link)`
padding: 10px 22px;
font-size: 0.6rem;
outline:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#f9f9f9;
}
`;

export const SocialIconLink = styled.div`
color:#fff;
font-size: 20px;
cursor:pointer;
`