import React from "react";
import LogoComponent from "./LogoComponent";
import TitleComponent from "./TitleComponent";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <LogoComponent />
      <TitleComponent />
      <NavLinks />
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0, 
    width: "100%",
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around", 
    color: "white", 
    zIndex: 1000, 
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", 
  },
};

export default Navbar;