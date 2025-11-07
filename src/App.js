import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BedLinenList from './components/BedLinendList';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collections" element={<BedLinenList />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
