import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'products' | 'cart'

  if (view === 'products') {
    return (
      <ProductList
        onCartClick={() => setView('cart')}
        onHomeClick={() => setView('landing')}
      />
    );
  }

  if (view === 'cart') {
    return <CartItem onContinueShopping={() => setView('products')} />;
  }

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-brand">🌿 Paradise Nursery</div>
      </nav>
      <div className="landing-hero">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-tagline">
          Bringing nature's calm into your home, one plant at a time.
        </p>
        <button className="get-started-btn" onClick={() => setView('products')}>
          Get Started
        </button>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
