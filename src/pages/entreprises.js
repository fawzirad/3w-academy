import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header/indexEntreprises";
import Offres from "../components/Offres";
import InfoSectionInterne from "../components/InfoSection/indexinterne";
import { Entreprise1 } from "../components/InfoSection/Data";
import NavbarInterne from "../components/NavbarInterne";

const Entreprises = () => {
  const [isOpen, setIsOpen] = useState(false);
  const myref = useRef(null);
  window.scrollTo(0, myref.offsetTop);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div ref={myref}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarInterne toggle={toggle} />
      <Header />
      <Offres />
      <InfoSectionInterne {...Entreprise1} />
      <Footer />
    </div>
  );
};

export default Entreprises;
