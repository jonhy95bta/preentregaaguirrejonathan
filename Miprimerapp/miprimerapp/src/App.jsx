import { useState } from 'react'
import './App.css'
import React from "react";
import NavBar from "./components/NavBar";
import TitleComponent from './components/TitleComponent';

const App = () => {
  return (
    <header>
    <div>
      <NavBar/>
      <div style={{ padding: "20px" }}>
        <h1>Bienvenido al proyecto</h1>
        
      </div>
    </div>
    </header>
    
  );
};

export default App;