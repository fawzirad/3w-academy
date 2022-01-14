import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header/indexEntreprises";
import Offres from "../components/Offres";
import InfoSectionInterne from "../components/InfoSection/indexinterne";
import { Entreprise1 } from "../components/InfoSection/Data";
import NavbarInterne from "../components/NavbarInterne";


const Entreprises = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarInterne toggle={toggle} />
      <Header />
      <Offres />
      <InfoSectionInterne {...Entreprise1} />
      <Footer />
    </>
  );
};

export default Entreprises;
