import { useState } from 'react'
import './App.css'
import React from "react";
import NavBar from "./components/NavBar";
import TitleComponent from './components/TitleComponent';
import CardProduct from './components/CardProduct';
import ItemListContainer from './components/ItemListContainer';
import products from "../data"

const App = () => {

  const list = products.map((prod) => (<CardProduct
    key={prod.id}
    price={prod.price}
    title={prod.title}
    text={prod.category}
    img={prod.img}
  />));
  return (
    <header>
      <div>
        <NavBar />
        <div style={{ padding: "20px" }}>
          <h1>Catalogo de compras</h1>

        </div>
        
        <section>
        {list}
        </section>
      </div>
    </header>

  );
};

export default App;

