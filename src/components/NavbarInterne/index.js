import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

import {
  NavInterne,
  NavbarInterneContainer,
  NavInterneLogo,
  MobileInterneIcon,
  NavInterneMenu,
  NavInterneItem,
  NavInterneLinks,
  NavInterneBtn,
} from "./NavbarInterneElements";

import {SocialIconLink} from "../Footer/FooterElements.js";
import {FaLinkedinIn} from "react-icons/fa";
import {GrFacebookOption} from "react-icons/gr";
import {RiInstagramFill} from "react-icons/ri"

const NavbarInterne = ({ toggle }) => {
  const toggleHome = () => {};

  return (
    <>
      <NavInterne>
        <NavbarInterneContainer>
          <NavInterneLogo to="/" onClick={toggleHome}>
            <img
              alt=""
              className="logo"
              src="https://3wa.fr/wp-content/uploads/2020/01/cropped-big.png"
            />
          </NavInterneLogo>
          <MobileInterneIcon onClick={toggle}>
            <RiMenu3Fill />
          </MobileInterneIcon>
          <NavInterneMenu>
            <NavInterneItem>
              <NavInterneLinks
                to="/ecole"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Notre école
              </NavInterneLinks>
            </NavInterneItem>
            <NavInterneItem>
              <NavInterneLinks
                to="/formation"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Formation
              </NavInterneLinks>
            </NavInterneItem>
            <NavInterneItem>
              <NavInterneLinks
                to="/metiers"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Métiers
              </NavInterneLinks>
            </NavInterneItem>
            <NavInterneItem>
              <NavInterneLinks
                to="/technologies"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Technologies
              </NavInterneLinks>
            </NavInterneItem>
            <NavInterneItem>
              <NavInterneLinks
                to="/entreprises"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Entreprises
              </NavInterneLinks>
            </NavInterneItem>
          </NavInterneMenu>
          <NavInterneBtn>
            <SocialIconLink href="https://www.facebook.com/3wAcademyMaroc/" target="_blank" aria-label="Facebook">
              <GrFacebookOption />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/3w_academy_maroc/" target="_blank" aria-label="Instagram">
              <RiInstagramFill />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/school/3w-academy-maroc/?originalSubdomain=fr" target="_blank" aria-label="Linkedin">
              <FaLinkedinIn />
            </SocialIconLink>
          </NavInterneBtn>
        </NavbarInterneContainer>
      </NavInterne>
    </>
  );
};

export default NavbarInterne;
