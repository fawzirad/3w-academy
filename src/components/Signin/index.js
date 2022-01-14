import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormLabel,
  FormWrap,
  Text,
  TopLine1,
  Logo,
  FormH1,
  Form,
  FormInput,
  FormTextArea,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Logo to="/">
            <img
              style={{ width: "100px" }}
              alt="logo"
              src="https://3wa.fr/wp-content/uploads/2020/01/cropped-big.png"
            />
          </Logo>

          <FormContent>
            <Form action="#">
              <FormH1>Ta réussite dans le digital commence ici !</FormH1>
              <TopLine1>
                Venez nous rencontrer et obtenez toutes les informations pour
                suivre nos formations (méthodes, modalités, financements et
                dates de sessions) Nous ne communiquerons jamais vos coordonnées
                à des tiers.
              </TopLine1>
              <FormLabel htmlFor="for">Nom</FormLabel>
              <FormInput type="text" placeholder="Entrez votre nom" required />
              <FormLabel htmlFor="for">Prénom</FormLabel>
              <FormInput type="text" placeholder="Entrez votre prénom" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" placeholder="exemple@domaine.com" required />
              <FormLabel htmlFor="for">Téléphone</FormLabel>
              <FormInput type="text" placeholder="Par ex : +212661657823" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormTextArea rows="5" placeholder="Ecrire votre message" required></FormTextArea>
              <FormButton type="submit">
                S'inscrire à la réunion d'information
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
