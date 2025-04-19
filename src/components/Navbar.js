import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">WasteLoop</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/upcycle-ideas">Upcycle Ideas</Link>
        <Link to="/sell">Sell Items</Link>
        <Link to="/feedback">Feedback</Link> {/* Corrected the path */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-button">Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;