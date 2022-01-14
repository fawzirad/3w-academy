import styled from "styled-components";
import Img from "../../images/error.svg";

export const Container = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 980px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 900px;
  }

  @media screen and (max-width: 480px) {
    height: 900px;
  }
`;

export const Err = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorBg = styled.div`
  width: 700px;
  height: 700px;
  background-repeat: no-repeat;
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  background-image: url(${Img});

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
`;
