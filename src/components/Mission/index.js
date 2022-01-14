import React from "react";
import Icon1 from '../../images/competence.svg';
import Icon2 from '../../images/coordination.svg';
import Icon3 from '../../images/group.svg';
import {
  MissionContainer,
  MissionWrapper,
  MissionCard,
  MissionIcon,
  MissionH1,
  MissionH2,
  MissionP,
} from "./MissionElements";

const Mission = () => {
  return (
    <MissionContainer>
      <MissionH1>Notre mission</MissionH1>
      <MissionWrapper>
        <MissionCard>
          <MissionIcon src={Icon1} />
          <MissionH2>Compétences</MissionH2>
          <MissionP>Vous former au développement web avec efficacité.</MissionP>
        </MissionCard>
        <MissionCard>
          <MissionIcon src={Icon2} />
          <MissionH2>Soft Skills</MissionH2>
          <MissionP>Vous aider à développer votre potentiel humain.</MissionP>
        </MissionCard>
        <MissionCard>
          <MissionIcon src={Icon3} />
          <MissionH2>Réseau</MissionH2>
          <MissionP>Vous intégrer à un réseau de professionels du métier.</MissionP>
        </MissionCard>
      </MissionWrapper>
    </MissionContainer>
  );
};

export default Mission;
