import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BedLinenList from './components/BedLinendList';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (

      <Routes>
        <Route path="/Lumea" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collections" element={<BedLinenList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
}

export default App;
