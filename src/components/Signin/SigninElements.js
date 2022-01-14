import styled from "styled-components";
import {Link} from "react-router-dom";
import Img1 from "../../images/bg_sign.jpg";

export const Container = styled.div`
height: auto;
position: relative;
bottom: 0;
left: 0;
right: 0;
top:0;
z-index:0;
overflow:hidden;
background: #1f293d;
padding:0 0 60px 0;
background-image: url( ${ Img1 });
`;

export const FormWrap = styled.div`
height: auto;
display: flex;
flex-direction: column;
justify-content: center;


`;

export const Logo = styled(Link)`
margin:20px auto;
text-decoration: none;
text-align: center;
width:200px;

`;

export const FormContent = styled.div`
height:100%;
padding: 0 20px;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:480px) {
    padding: 0 15px;
}
`;


export const Form = styled.form`
background: transparent;
max-width: 600px;
height: auto;
width:100%;
z-index: 1;
display: grid;
margin:0 auto;
/* padding: 32px; */
border-radius: 4px;
/* box-shadow: 0 1px 3px rgba(0,0,0,0.9); */

@media screen and (max-width:400px) {
    padding: 32px;
}
`;

export const FormH1 = styled.h1`

color: #fff;
margin-bottom: 20px;
font-size: 32px;
line-height: 100%;
font-weight: 600;
text-align:center;

@media screen and (max-width:400px) {
    font-size: 26px;
}

`;

export const TopLine1 = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: auto;
  font-weight: 400;
  text-align:center;
  margin-bottom: 16px;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;

export const FormInput = styled.input`
padding: 14px 14px;
margin-bottom: 26px;
border:none;
border-radius: 50px;
`;

export const FormTextArea = styled.textarea`
padding: 14px 14px;
margin-bottom: 32px;
border:none;
border-radius: 20px;
`;


export const FormButton = styled.button`
background: #ef4036;
padding: 14px 0;
border:none;
border-radius: 50px;
color: #fff;
font-size: 14px;
cursor: pointer;
`;


export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`;