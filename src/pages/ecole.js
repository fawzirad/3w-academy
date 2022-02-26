import React, { useState, useRef } from "react";
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
      <InfoSectionInterne {...ecole1} />
      <Mission />
      <Campus />
      <Footer />
    </div>
  );
};

export default Ecole;
