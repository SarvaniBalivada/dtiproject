import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure this line is present to apply styles
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './pages/Home'; // Import Home component
import SellItems from './pages/SellItems'; // Import SellItems component
import UpcycleIdeas from './pages/UpcycleIdeas'; // Import UpcycleIdeas component
import Login from './pages/Login'; // Import Login component
import Marketplace from './pages/Marketplace'; // Import Marketplace component
import Feedback from './pages/Feedback'; // Import Feedback component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define Home route */}
          <Route path="/login" element={<Login />} /> {/* Define Login route */}
          <Route path="/marketplace" element={<Marketplace />} /> {/* Define Marketplace route */}
          <Route path="/sell" element={<SellItems />} /> {/* Define SellItems route */}
          <Route path="/upcycle-ideas" element={<UpcycleIdeas />} /> {/* Define UpcycleIdeas route */}
          <Route path="/feedback" element={<Feedback />} /> {/* Define Feedback route */}
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
