import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { ecole1 } from "../components/InfoSection/Data";
import Header from "../components/Header/indexEcole";
import Mission from "../components/Mission";
import InfoSectionInterne from "../components/InfoSection/indexinterne";
import NavbarInterne from "../components/NavbarInterne";
import Campus from "../components/Campus";

const Ecole = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarInterne toggle={toggle} />
      <Header />
      <InfoSectionInterne {...ecole1} />
      <Mission />
      <Campus />
      <Footer />
    </>
  );
};

export default Ecole;
