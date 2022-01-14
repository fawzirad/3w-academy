import styled from "styled-components";
import Img from "../../images/bg.jpg";

export const HeaderBg = styled.div`
  background: #161d31;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
  padding: 0 30px;
  height: 200px;
  position: relative;
  z-index: 1;
  background-image: url( ${ Img });
`;


export const TitleInterne = styled.h2`
  font-size: 52px;
  color: #fff;
  font-weight: lighter;
`;
