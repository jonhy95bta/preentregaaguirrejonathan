import { useState } from 'react'
import './App.css'
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';


const App = () => {


  return (
    <header>
      <div>
        <NavBar />
        <div style={{ padding: "20px" }}>
          <h1>Catalogo de compras</h1>

        </div>

        <section>
          <ItemListContainer />
        </section>
      </div>
    </header>

  );
};

export default App;

