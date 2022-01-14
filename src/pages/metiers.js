import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { metiers1, metiers2 } from "../components/InfoSection/Data";
import Header from "../components/Header/indexMetiers";
import InfoSectionInterne from "../components/InfoSection/indexinterne";
import NavbarInterne from "../components/NavbarInterne";

const Metiers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarInterne toggle={toggle} />
      <Header />
      <InfoSectionInterne {...metiers1} />
      <InfoSectionInterne {...metiers2} />
      <Footer />
    </>
  );
};

export default Metiers;
