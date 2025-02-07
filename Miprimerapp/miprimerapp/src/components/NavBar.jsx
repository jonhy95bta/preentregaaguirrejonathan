import React from "react";
import LogoComponent from "./LogoComponent";
import TitleComponent from "./TitleComponent";
import NavLinks from "./NavLinks";
import CardWidget from "./CardWidget";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo a la izquierda */}
      <div style={styles.logoContainer}>
        <LogoComponent />
      </div>

      {/* Título centrado absolutamente */}
      <div style={styles.titleContainer}>
        <TitleComponent />
      </div>

      {/* Links a la derecha con el carrito pegado */}
      <div style={styles.linksContainer}>
        <CardWidget />
        <NavLinks />

      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",

    margin: "0 auto",  
    backgroundColor: "#003366",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBoton: "10px",  
    marginBottom: "20px", 
    color: "white",
    zIndex: 1000,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  titleContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },

  linksContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default Navbar;