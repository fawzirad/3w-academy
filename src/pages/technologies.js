import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
  Frameworks,
  Languages,
  Librairies,
  Outils,
} from "../components/InfoSection/Data";
import Header from "../components/Header/indexTechnologies";
import InfoSectionInterne from "../components/InfoSection/indexinterne";
import NavbarInterne from "../components/NavbarInterne";

const Technologies = () => {
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
      <InfoSectionInterne {...Languages} />
      <InfoSectionInterne {...Frameworks} />
      <InfoSectionInterne {...Librairies} />
      <InfoSectionInterne {...Outils} />
      <Footer />
    </div>
  );
};

export default Technologies;
