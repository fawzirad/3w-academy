import React from "react";

import {
  FormationsContainer,
  FormationsWrapper,
  FormationsCard,
  FormationsH2,
  FormationsP,
  FormationsBtn,
} from "./FormationsElements";


const Formations = () => {

    return (
    <FormationsContainer>
      <FormationsWrapper>
        <FormationsCard>
          <FormationsH2>Développeur WordPress</FormationsH2>
          <FormationsP>Crée ton site web de A à Z avec WordPress La Masterclass WordPress</FormationsP>
          <FormationsBtn href="signin">S'inscrire</FormationsBtn>
        </FormationsCard>
        <FormationsCard>
          <FormationsH2>Back-end Bootcamp</FormationsH2>
          <FormationsP>Devenez développeur Full-stack en 4 mois grâce à nos cours du soir.</FormationsP>
          <FormationsBtn href="signin">S'inscrire</FormationsBtn>
        </FormationsCard>
        <FormationsCard>
          <FormationsH2>Développeur Front-end</FormationsH2>
          <FormationsP>La formation Développeur WEB Front-End est un programme 90% pratique de 3 mois en temps.</FormationsP>
          <FormationsBtn href="signin">S'inscrire</FormationsBtn>
        </FormationsCard>
        <FormationsCard>
          <FormationsH2>Full-stack Bootcamp</FormationsH2>
          <FormationsP>Devenez développeur Full-stack en 4 mois grâce à nos cours du soir pour les professionnels.</FormationsP>
          <FormationsBtn href="signin">S'inscrire</FormationsBtn>
        </FormationsCard>
        <FormationsCard>
          <FormationsH2>Front-end Bootcamp</FormationsH2>
          <FormationsP>Devenez développeur Front-end en 4 mois grâce à nos cours du soir en ligne.</FormationsP>
          <FormationsBtn href="signin">S'inscrire</FormationsBtn>
        </FormationsCard>
      </FormationsWrapper>
    </FormationsContainer>
  );
};

export default Formations;
