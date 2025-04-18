import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import UpcycleIdeas from './pages/UpcycleIdeas';
import SellItems from './pages/SellItems';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/upcycle-ideas" element={<UpcycleIdeas />} />
            <Route path="/sell" element={<SellItems />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
