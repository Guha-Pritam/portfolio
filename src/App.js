import React from 'react';
import Home from './components/Home/Home'
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>  
    
  )
}

export default App;