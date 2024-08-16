// src/components/Cart.js
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css"; // Import the Cart stylesheet

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
