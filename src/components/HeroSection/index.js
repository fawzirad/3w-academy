import React, {useState} from "react";
import { Button } from "../ButtonElements";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements";

const HeroSection = () => {

    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Le code d'aujourd'hui, votre emploi de demain</HeroH1>
        <HeroP>
          420 heures de cours, 10% de théorie pour 90% de pratique, 5
          technologies et l'accès à un métier qui recrute
        </HeroP>
        <HeroBtnWrapper>
          <Button 
          to="/signin" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
          >
          S'inscrire à la réunion d'information{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
