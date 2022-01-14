import styled from "styled-components";
import Img1 from "../../images/map.jpg";

export const CampusContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffff;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const CampusWrapper = styled.div`
  max-width: 1100px;
  /* margin: auto; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 700px;
    /* padding: 0 20px; */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 300px;
    /* padding: 0 20px; */
  }
`;

export const CampusCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 80px 0;
  
  @media screen and (max-width: 768px) {
    max-width: auto;
    padding: 50px 25px; 
  }

  @media screen and (max-width: 480px) {
    max-width: auto;
    padding: 30px 15px;
  }
`;

export const CampusImg = styled.div`

  background-repeat: no-repeat;
  width: 552px;
  height: 468px;
  /* background-color: #ef4036; */
  background-image: url(${Img1});
  border-radius: 10px;

  /* @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  } */
`;

export const CampusTitle = styled.p`
  color: #ef4036;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const CampusH1 = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  color: #171d30;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CampusSubtitle = styled.p`
  max-width: 540px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #161d31;
`;

export const CampusUl = styled.ul`
  margin-left: 20px;
  align-self: flex-start;
  width: 350px;
  list-style-type: square;
  padding: 0;
  columns: 2;
`;

export const CampusLi = styled.li`
  margin: 0.2rem 0;
  display: list-item;
`;

export const CampusCity = styled.div`
  font-size: 14px;
  color: #161d31;

  &:hover {
    color: #ef4036;
  }
`;
