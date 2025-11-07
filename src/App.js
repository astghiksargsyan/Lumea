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
        <Route path="/Lumea" element={<Home />} />

        <Route path="/Lumea/about" element={<AboutUs />} />
        <Route path="/Lumea/collections" element={<BedLinenList />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
