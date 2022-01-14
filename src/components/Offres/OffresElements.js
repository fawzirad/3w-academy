import styled from "styled-components";

export const OffresContainer = styled.div`
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

export const OffresWrapper = styled.div`
max-width: 1100px;
margin:20px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 30px;
padding: 20px;


@media screen and (max-width:768px) {
    grid-template-columns: 1fr;
    padding: 20px;
}
`;


export const TitleH1 = styled.h1`
margin-top: 60px;
font-size: 2.5rem;
color: #161d31;
text-align:center;

@media screen and (max-width:480px) {
    font-size:2rem;
}
`

export const ParOff = styled.p`
  text-align:center;
  max-width: 840px;
  padding: 20px;
  font-size: 14px;
  line-height: auto; 
  color:#161d31;
  
  @media screen and (max-width:768px) {
    max-width: 650px;  
}

@media screen and (max-width:480px) {
    max-width: 300px;  
}
`
export const OffresCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
border: 2px solid #ef4036;
/* height: 200px; */
padding: 20px;
transition: all 0.2s ease-in-out;

/*&:hover{
    background: #ef4036;
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
}*/
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

export const OffresH2 = styled.h2`
font-weight: 600;
font-size: 18px;
/* margin-bottom: 10px; */
text-align: center;
`

export const OffresP = styled.p`
font-size: 14px;
text-align: center;
margin-bottom: 20px;
`

export const OffresDate = styled.p`
font-size: 14px;
text-align: center;
color: grey;
margin-bottom: 10px;
`

// export const FormationsPO = styled.p`
// font-size: 16px;
// color:#ef4036 ;
// font-weight: 600;
// text-align: center;
// /* margin-bottom: 10px; */
// `

export const OffresBtn = styled.a`
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
    background: #161d31;
    color: #fff;
    border:none;
}
`