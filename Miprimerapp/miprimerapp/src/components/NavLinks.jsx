import React from "react";

const NavLinks = () => {
  return (
    <ul style={styles.navList}>
      <li style={styles.navItem}>
        <a href="/" style={styles.navLink}>
          Inicio
        </a>
      </li>
      <li style={styles.navItem}>
        <a href="/Nosotros" style={styles.navLink}>
          Nosotros
        </a>
      </li>
      <li style={styles.navItem}>
        <a href="/Contacto" style={styles.navLink}>
          Contacto
        </a>
      </li>
    </ul>
  );
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