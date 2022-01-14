import React from "react";
import {animateScroll as scroll} from 'react-scroll';
import { FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from "react-icons/fa";
import {GrFacebookOption, GrYoutube} from "react-icons/gr";
import {RiInstagramFill} from "react-icons/ri"
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>A propos</FooterLinkTitle>
              <FooterLink to="/ecole">Qui sommes-nous?</FooterLink>
              <FooterLink to="/ecole">Notre mission</FooterLink>
              <FooterLink to="/ecole">Nos campus</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Formations</FooterLinkTitle>
              <FooterLink to="/formation">Développeur WordPress</FooterLink>
              <FooterLink to="/formation">Back-end Bootcamp</FooterLink>
              <FooterLink to="/formation">Développeur Front-end</FooterLink>
              <FooterLink to="/formation">Front-end Bootcamp</FooterLink>
              <FooterLink to="/formation">Full-stack Bootcamp</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Métiers</FooterLinkTitle>
              <FooterLink to="/entreprises">Offres d'emploi</FooterLink>
              <FooterLink to="/technologies">Technologies</FooterLink>
              <FooterLink to="/entreprises">Entreprises</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink >Casablanca:<br/>(+212) 707-143-777</FooterLink>
              <FooterLink >Rabat:<br/>(+212) 665-279-092</FooterLink>
              <FooterLink href="mailto:contact@3wa.ma">Email:<br/>contact@3wa.ma</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialLogo to='/' onClick={toggleHome}>
            <img alt='' className='logoFooter' src='https://3wa.fr/wp-content/uploads/2020/01/cropped-big.png'/>
            </SocialLogo>
            <WebsiteRights>3W Academy Maroc © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialMediaWrap>
            <SocialIcons>
                <SocialIconLink href="https://www.facebook.com/3wAcademyMaroc/" target="_blank" aria-label="Facebook">
                    <GrFacebookOption/>
                </SocialIconLink>
                <SocialIconLink href="https://www.instagram.com/3w_academy_maroc/?hl=fr" target="_blank" aria-label="Instagram">
                    <RiInstagramFill/>
                </SocialIconLink>
                <SocialIconLink href="https://www.youtube.com/channel/UCsTZu3IPlF5gU3858dJsO1g" target="_blank" aria-label="Youtube">
                    <GrYoutube/>
                </SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/school/3w-academy-maroc/?originalSubdomain=fr" target="_blank" aria-label="Linkedin">
                    <FaLinkedinIn/>
                </SocialIconLink>
                <SocialIconLink href="https://twitter.com/3wacademymaroc?lang=fr" target="_blank" aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
