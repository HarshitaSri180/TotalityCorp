import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, removeProduct } from '../store/slice/cartSlice';

const MyCart = () => {
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [loadingItems, setLoadingItems] = useState([]);

  const handleClearCart = () => {
    setLoadingItems(cartData.map((item) => item.id));
    setTimeout(() => {
      dispatch(clearCart());
      setLoadingItems([]);
    }, 1000); 
  };
  
  const handleRemoveProduct = (productId) => {
    setLoadingItems((prevLoadingItems) => [...prevLoadingItems, productId]);
    setTimeout(() => {
      dispatch(removeProduct(productId));
    }, 2000); 
  };
  const totalPrice = cartData.reduce((price, item) => price + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartData.length === 0 ? (
        <><h3>Your cart is empty.</h3><Link to="/products"> <h3 className='checkout-button'>Continue Shopping</h3></Link></>
      ) : (
        <>
        
          <ul className="cart-list">
            {cartData.map((item) => (
              <li key={item.id} className={`cart-item ${loadingItems.includes(item.id) ? 'loading' : ''}`}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                  <button className='remove-button' onClick={() => handleRemoveProduct(item.id)} disabled={loadingItems.includes(item.id)}>
                    {loadingItems.includes(item.id) ? 'Removing...' : 'Remove'}
                  </button>
              </li>
              
            ))}
            <button className='clear-cart-button' onClick={handleClearCart}>
            Clear cart
            </button>
            </ul>
          <h3>TOTAL PRICE: ${totalPrice}</h3>
          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>

        </>
      )}
    </div>
  );
};

export default MyCart;
