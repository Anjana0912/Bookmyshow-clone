import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component.js";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";
const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    </>
  );
};

export default DefaultLayout;
