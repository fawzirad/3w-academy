import React from "react";
import Icon1 from '../../images/programmation.svg'
import Icon2 from '../../images/codage.svg'
import Icon3 from '../../images/configuration.svg'
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="technologies">
      <ServicesH1>Technologies</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Languages</ServicesH2>
          <ServicesP>HTML, CSS, Javascript, PHP, Python, C#, Java, SQL</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Frameworks et Plateformes</ServicesH2>
          <ServicesP>Angular, Drupal, Node.Js, Symphony, React Native</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Librairies</ServicesH2>
          <ServicesP>Bootstrap, keras, NumPy, Pandas, React.Js</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
