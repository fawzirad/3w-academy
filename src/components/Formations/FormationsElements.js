import styled from "styled-components";

export const FormationsContainer = styled.div`
height: auto;
display: flex;
flex-direction: column;
align-items: center;
background: #f7f8fa;

@media screen and (max-width:768px) {
    height: auto;
}

@media screen and (max-width:480px) {
    height: auto;
}
`

export const FormationsWrapper = styled.div`
max-width: 1100px;
margin:40px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 30px;
padding: 40px;


@media screen and (max-width:768px) {
    grid-template-columns: 1fr;
    padding: 20px;
}
`;

export const FormationsCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
border: 2px solid #ef4036;
height: 200px;
padding: 20px;
transition: all 0.2s ease-in-out;

&:hover{
    color:#ffff;
    background: #ef4036;
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
}
`;

// export const FormationsIcon = styled.img`
// fill: #ef4036; 
// height: 100px;
// width:100px;
// margin-bottom: 10px;

// &:hover{
//     fill: #f7f8fa;  
// }
// `

export const FormationsH2 = styled.h2`
font-weight: 600;
font-size: 22px;
/* margin-bottom: 10px; */
text-align: center;
`

export const FormationsP = styled.p`
font-size: 14px;
text-align: center;
margin-bottom: 20px;
`

// export const FormationsPO = styled.p`
// font-size: 16px;
// color:#ef4036 ;
// font-weight: 600;
// text-align: center;
// /* margin-bottom: 10px; */
// `

export const FormationsBtn = styled.a`
  width: 120px;
  border-radius: 50px;
  background: #ef4036;
  padding: 12px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border:2px solid #fff;
  
  &:hover {
    background: #fff;
    color: #ef4036;
    border:none;
}
`
