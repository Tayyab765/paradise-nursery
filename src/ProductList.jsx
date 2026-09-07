import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import plantsArray from './plantsData';
import './ProductList.css';

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <div className="nav-brand" onClick={onHomeClick}>
          🌿 Paradise Nursery
        </div>
        <div className="nav-links">
          <span className="nav-link" onClick={onHomeClick}>Home</span>
          <span className="nav-link" onClick={() => {}}>Plants</span>
          <span className="nav-link cart-link" onClick={onCartClick}>
            🛒 Cart
            <span className="cart-count">{totalQuantity}</span>
          </span>
        </div>
      </nav>

      <div className="product-list-content">
        <h1>Our Plant Collection</h1>
        {plantsArray.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="plant-grid">
              {categoryGroup.plants.map((plant) => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} className="plant-thumb" />
                  <h3>{plant.name}</h3>
                  <p className="plant-desc">{plant.description}</p>
                  <p className="plant-price">{plant.cost}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={!!addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
