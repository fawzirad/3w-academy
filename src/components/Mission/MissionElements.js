import styled from "styled-components";

export const MissionContainer = styled.div`
height: 530px;
display: flex;
flex-direction: column;
align-items: center;
background: #dce3ea;


@media screen and (max-width:768px) {
    height: auto;
}

@media screen and (max-width:480px) {
    height: auto;
}
`

export const MissionWrapper = styled.div`
max-width: 1100px;
margin:40px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 40px;

/*@media screen and (max-width:1000px) {
    grid-template-columns: 1fr;
}*/

@media screen and (max-width:768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const MissionCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 40px;
box-shadow: 0 1px 3px rgba(0,0,0,0);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width:480px) {
    max-height: 340px;
    max-width: 460px;
    padding: 15px;  
}
`;

export const MissionIcon = styled.img`
height: 100px;
width:100px;
margin-bottom: 10px;
`

export const MissionH1 = styled.h1`
margin-top: 80px;
font-size: 2.5rem;
color: #161d31;

@media screen and (max-width:480px) {
    font-size:2rem;
}
`

export const MissionH2 = styled.h2`
font-size: 1rem;
margin-bottom: 6px;
`

export const MissionP = styled.p`
font-size: 1rem;
text-align: center;
`