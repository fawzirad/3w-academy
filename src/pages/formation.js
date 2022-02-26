import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header/indexFormation";
import Formations from "../components/Formations";
import InfoSectionInterne from "../components/InfoSection/indexinterne";
import { formation1 } from "../components/InfoSection/Data";
import NavbarInterne from "../components/NavbarInterne";

const Formation = () => {
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
      <Formations />
      <InfoSectionInterne {...formation1} />
      <Footer />
    </div>
  );
};

export default Formation;
