// src/components/Checkout.js
import React from 'react';
import './Checkout.css'; // Import the Checkout stylesheet
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cartData } = useSelector((state) => state.cart);
  const totalPrice = cartData.reduce((total , item)=> total + item.price , 0)

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartData.length === 0 ? (
        <p>Your cart is empty. Add items to proceed to checkout.</p>
      ) : (
        <>
          <ul className="checkout-list">
            {cartData.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <p className="checkout-item-name">{item.name}</p>
                  <p className="checkout-item-price">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
              
          <div className="payment-options">
            <h3>Total Price: ${totalPrice}</h3>
            <p>Select a payment method:</p>
            <div className="payment-images">
              <img src="https://images.livemint.com/img/2020/12/07/1600x900/Google-Pay-4_5d8472821722c_1589536494425_1589536494709_1607325839676.jpg" alt="Google Pay" />
              <img src="https://i.pinimg.com/originals/d2/3c/bf/d23cbf926d0672238d35ff3486a8c7a3.png" alt="Paytm" />
              {/* Add more payment images as needed */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
