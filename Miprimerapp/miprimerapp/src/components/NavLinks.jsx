import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul style={styles.navList}>
      <li style={styles.navItem}><Link to="/" style={styles.navLink}>Inicio</Link></li>
      <li style={styles.navItem}><Link to="/Nosotros" style={styles.navLink}>Nosotros</Link></li>
      <li style={styles.navItem}><Link to="/Contacto" style={styles.navLink}>Contacto</Link></li>
    </ul>
  )
  
};

const styles = {
  navList: {
    flex: "0 0 auto",
    listStyleType: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: "10px",
  },
  navItem: {},
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default NavLinks;