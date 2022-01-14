import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#transparent': "#161d31")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "14px 48px")};
  color: ${({ dark }) => (dark ? "#f9f9f9" : "#f9f9f9")};
  font-size: ${({ fontBig }) => (fontBig ? "14px" : "14px")};
  /* outline: none; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: 2px solid #f9f9f9;
  text-decoration: none;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }

  @media screen and (max-width: 480px) {
    max-width: 280px;
  }
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ef4036': "#ef4036")};
    border: none;
  }
`;
