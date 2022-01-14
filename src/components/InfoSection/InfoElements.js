import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#161d31")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;


export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

export const TopLine = styled.p`
  color: #ef4036;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#161d31")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  text-align:justify;
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: auto;
  color: ${({ darkText }) => (darkText ? "#161d31" : "#f7f8fa")};
`;


export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`

  width: 500px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: auto;
    margin-top: 20px;
  }
`;

export const Img = styled.img`

  /* width: 100%; */
  margin: 0 0 10px 0;
  padding-right: 0;
`;

// Pour les pages internes //

// export const InfoContainer1 = styled.div`
//   padding: 40px 0;
//   top: 0;
//   right: 0;
//   left: 0;
//   bottom: 0;
//   background: #f9f9f9;

//   @media screen and (max-width: 768px) {
//     padding: 60px 0;
//   }
// `;

export const InfoWrapper1 = styled.div`
  /* background: #f9f9f9; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  padding: 35px 20px 0 20px;
  margin-right: auto;
  margin-left: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
`;

export const InfoRow1 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column11 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col1;
`;

export const Column22 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper1 = styled.div`
  max-width: auto;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

export const Heading1 = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  line-height: auto;
  font-weight: 400;
  color: #ef4036;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Heading2 = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  line-height: auto;
  font-weight: 400;
  color: #ef4036;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle1 = styled.p`
  text-align: justify;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: auto;
  color: #161d31;
`;

export const Subtitle2 = styled.p`
text-align: justify;
margin-bottom: 30px;
  font-size: 14px;
  line-height: auto;
  color: #161d31;
`;

export const BtnWrap1 = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap1 = styled.div`

  max-width: auto;
  height: 100%;
`;

export const Img1 = styled.img`
border-radius: 10px;
  width: 100%;
  margin: 0 0 20px 0;
  padding-right: 0;
`;
