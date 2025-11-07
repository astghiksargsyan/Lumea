import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BedLinenList from './components/BedLinendList';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

function App() {
  return (

      <Routes>
        <Route path="/Lumea" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collections" element={<BedLinenList />} />
      </Routes>
    
  );
}

export default App;
