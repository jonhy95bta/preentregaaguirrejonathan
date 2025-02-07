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



const App = () => {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1 style={{ marginBottom: "20px" }}>Catálogo de compras</h1>
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

        </div>
        <section>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartView/>}/>



          </Routes>
        </section>
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

