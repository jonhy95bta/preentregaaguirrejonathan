import { useState } from 'react'
import './App.css'
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import { Link } from "react-router-dom";
import { CartContextProvider } from './context/cardContext';
import CartView from './components/CartView';
import { createDocument, exportProductsToDB, exportProductsWithBatch } from './data/database';


const App = () => {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />

        <div style={{ padding: "60px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Catálogo de compras</h2>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link to="/category/pesas" style={styles.navLink}>Pesas</Link></li>
            <li style={styles.navItem}><Link to="/category/yoga" style={styles.navLink}>Yoga</Link></li>
            <li style={styles.navItem}><Link to="/category/tecnología" style={styles.navLink}>Tecnología</Link></li>
            <li style={styles.navItem}><Link to="/category/ropa deportiva" style={styles.navLink}>Ropa deportiva</Link></li>
            <li style={styles.navItem}><Link to="/category/recuperación" style={styles.navLink}>Recuperacion</Link></li>
            <li style={styles.navItem}><Link to="/category/accesorios" style={styles.navLink}>Accesorios</Link></li>
            <li style={styles.navItem}><Link to="/category/cardio" style={styles.navLink}>Cardio</Link></li>
            <li style={styles.navItem}><Link to="/category/nutrición" style={styles.navLink}>Nutricion</Link></li>
            <li style={styles.navItem}><Link to="/category/entrenamiento funcional" style={styles.navLink}>Funcional</Link></li>
          </ul>
          <button onClick={createDocument}>Crear Documento</button>
          <button onClick={exportProductsToDB}>Exportar base de datos</button>
          <button onClick={exportProductsWithBatch}>Exportar base de datos con batch</button>
        </div>
        <section>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartView />} />



          </Routes>
        </section>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>

  );
};

export default App;

const styles = {
  navList: {
    flex: "0 0 auto",
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: 0,
    padding: "10px",
  },
  navItem: {},
  navLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
  },
};

const footerStyles = {
  footer: {
    backgroundColor: "#003366", 
    color: "#ffffff",
    textAlign: "center",
    padding: "20px 0",         
    width: "100%",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "40px",
  },
};

function Footer() {
  return (
      <footer style={footerStyles.footer}>
          <p style={footerStyles.text}>
              "Entrenar da mejor calidad y años a tu vida"
          </p>
      </footer>
  );
}