import React from "react";
import {RiMenu3Fill} from "react-icons/ri";
import {animateScroll as scroll} from 'react-scroll';
import {FaLinkedinIn} from "react-icons/fa";
import {GrFacebookOption} from "react-icons/gr";
import {RiInstagramFill} from "react-icons/ri"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavInterneBtn,
  SocialIconLink,
} from "./NavbarElements";

const Navbar = ({toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}><img alt='' className='logo' src='https://3wa.fr/wp-content/uploads/2020/01/cropped-big.png'/></NavLogo>
          <MobileIcon onClick={toggle}>
            <RiMenu3Fill />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="ecole"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Notre école</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="formation"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}
              >Formations</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="metiers"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Métiers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="technologies"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Technologies</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="entreprises"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Entreprises</NavLinks>
            </NavItem>
          </NavMenu>
          <NavInterneBtn>
            <SocialIconLink href="https://www.facebook.com/3wAcademyMaroc/" target="_blank" aria-label="Facebook">
              <GrFacebookOption />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/3w_academy_maroc/" target="_blank" aria-label="Instagram">
              <RiInstagramFill />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/school/3w-academy-maroc/?originalSubdomain=fr" target="_blank" aria-label="Youtube">
              <FaLinkedinIn />
            </SocialIconLink>
          </NavInterneBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
