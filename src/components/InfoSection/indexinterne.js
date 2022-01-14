import React from "react";
// import { Link } from "react-router-dom";

import {
  // InfoContainer1,
  InfoWrapper1,
  InfoRow1,
  Column11,
  Column22,
  TextWrapper1,
  Heading1,
  Heading2,
  Subtitle1,
  Subtitle2,
  ImgWrap1,
  Img1
} from "./InfoElements.js";


const InfoSectionInterne = ({
  lightBg1,
  id,
  imgStart1,
  lightText1,
  headline1,
  headline2,
  darkText1,
  description1,
  description2,
  img1,
  alt1,
  primary1,
  dark1,
  dark22
}) => {
  console.log(img1);
  return (
    <>
      
        <InfoWrapper1 lightBg={lightBg1} id={id}>
          <InfoRow1 imgStart={imgStart1}>
            <Column11>
              <TextWrapper1>
                <Heading1 lightText={lightText1}>{headline1}</Heading1>
                <Subtitle1 darkText={darkText1}>{description1}</Subtitle1>
                <Heading2 lightText={lightText1}>{headline2}</Heading2>
                <Subtitle2 darkText={darkText1}>{description2}</Subtitle2>
              </TextWrapper1>
            </Column11>
            <Column22>
              <ImgWrap1>
                <Img1 src={img1.default} alt={alt1} />
              </ImgWrap1>
            </Column22>
          </InfoRow1>
        </InfoWrapper1>
      
    </>
  );
};

export default InfoSectionInterne;
