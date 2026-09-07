import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const parseCost = (cost) => parseFloat(cost.replace('$', ''));

  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (name) => dispatch(incrementQuantity(name));
  const handleDecrement = (name) => dispatch(decrementQuantity(name));
  const handleRemove = (name) => dispatch(removeItem(name));

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="nav-brand">🌿 Paradise Nursery</div>
        <div className="nav-links">
          <span className="nav-link" onClick={onContinueShopping}>Home</span>
          <span className="nav-link" onClick={onContinueShopping}>Plants</span>
          <span className="nav-link cart-link">
            🛒 Cart
            <span className="cart-count">{totalQuantity}</span>
          </span>
        </div>
      </nav>

      <div className="cart-content">
        <h1>Shopping Cart</h1>
        <h2 className="cart-total-amount">
          Total Cart Amount: ${calculateTotalAmount()}
        </h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">Your cart is empty.</p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} className="cart-item-thumb" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-price">Unit Price: {item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item.name)}>-</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.name)}>+</button>
                  </div>
                  <p className="cart-item-total">
                    Subtotal: ${calculateTotalCost(item)}
                  </p>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemove(item.name)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
