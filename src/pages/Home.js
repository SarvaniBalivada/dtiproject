import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to WasteLoop</h1>
        <p>Reduce, Reuse, Recycle - Give your waste a new life</p>
        <div className="cta-buttons">
          <Link to="/marketplace" className="cta-button">Browse Items</Link>
          <Link to="/sell" className="cta-button">Sell Items</Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <h2>Buy Used Items</h2>
          <p>Find great deals on pre-owned items</p>
        </div>
        <div className="feature">
          <h2>Sell Your Items</h2>
          <p>Give your unused items a second chance</p>
        </div>
        <div className="feature">
          <h2>Upcycle Ideas</h2>
          <p>Discover creative ways to transform waste</p>
        </div>
      </div>
    </div>
  );
}

export default Home;