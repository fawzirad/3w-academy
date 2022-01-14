import React from "react";



import {
  OffresContainer,
  OffresWrapper,
  OffresCard,
  OffresH2,
  OffresDate,
  OffresP,
  OffresBtn,
  TitleH1,
  ParOff
} from "./OffresElements";

const Offres = () => {
  return (
    <OffresContainer>
      <TitleH1>Les entreprises qui recrutent</TitleH1>
      <ParOff>Les formations de développeur web en alternance 3W Academy permettent aux apprenants d’être opérationnels dès leur arrivée en entreprise.

Vous êtes à la recherche d’un alternant compétent pour vous aider à développer votre entreprise ou tout simplement pour participer à sa formation de développeur en alternance ? La 3W Academy propose de nombreuses formations disponibles en alternance destinées à former les développeurs web de demain.</ParOff>
      <OffresWrapper>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/b/b5/Capgemini_Logo.svg/1280px-Capgemini_Logo.svg.png"
          />
          <OffresH2>Développeur Web Front-End</OffresH2>
          <OffresDate>05.12.21</OffresDate>
          <OffresP>
            Vos missions consisteront à:Participer à l’analyse afin de cerner
            les besoins des utilisateurs avant d'établir un plan de
            programmation.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
          />
          <OffresH2>Développeur Full Stack</OffresH2>
          <OffresDate>03.12.21</OffresDate>
          <OffresP>
            Vos missions consisteront à: Participer à la maintenance et
            collaborer avec l'équipe dev et support, assurer la documentation du code produit.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/79/Atos_logo.svg/1200px-Atos_logo.svg.png"
          />
          <OffresH2>Développeur Web confirmé Laravel/VueJs</OffresH2>
          <OffresDate>29.11.21</OffresDate>
          <OffresP>
            Vos missions consisteront à: Améliorer continuellement le code et
            l'architecture existante.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://chantiersdumaroc.ma/wp-content/uploads/2021/02/Logo-Horizontal-686x192.png"
          />
          <OffresH2>Développeur Mobile (iOS, Android)</OffresH2>
          <OffresDate>27.11.21</OffresDate>
          <OffresP>
            Votre mission: Vous êtes dynamique, motivé et passionné par le développement mobile
            et développer vos compétences.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://www.webex.com/content/dam/wbx/us/images/rebrand/nav-footer/black.png"
          />
          <OffresH2>Développeur PHP Javascript</OffresH2>
          <OffresDate>25.11.21</OffresDate>
          <OffresP>
            Votre mission: Vous êtes dynamique, motivé et passionné par le développement mobile
            et vous aimeriez vous former et développer vos compétences.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Gameloft-logo-and-wordmark.png"
          />
          <OffresH2>Développeur Jeux vidéos</OffresH2>
          <OffresDate>24.11.21</OffresDate>
          <OffresP>
            Votre mission: Vous êtes dynamique, motivé et passionné par le développement mobile
            et vous aimeriez vous former et développer vos compétences.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mentor_Graphics_Logo.svg/1280px-Mentor_Graphics_Logo.svg.png"
          />
          <OffresH2>Développeur Web Back-end</OffresH2>
          <OffresDate>18.11.21</OffresDate>
          <OffresP>
            Votre mission: Vous êtes motivé et passionné par le développement mobile
            et vous aimeriez vous former et développer vos compétences.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
        <OffresCard>
          <img
            alt=""
            className="logoEntrp1"
            src="https://offshore-pyxicom.com/wp-content/uploads/2020/05/Logo-pyxicom20ans-horizontal.png"
          />
          <OffresH2>Développeur Web Front-End</OffresH2>
          <OffresDate>05.12.21</OffresDate>
          <OffresP>
            Vos missions consisteront à: Participer à l’analyse afin de cerner
            les besoins des utilisateurs avant d'établir un plan de
            programmation.
          </OffresP>
          <OffresBtn to="signin">Postulez</OffresBtn>
        </OffresCard>
      </OffresWrapper>
    </OffresContainer>
    
  );
};

export default Offres;
