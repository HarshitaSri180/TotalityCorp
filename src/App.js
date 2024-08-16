// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import './assets/style/App.css';
import MyCart from './pages/MyCart';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import PrivateRoutes from './PrivateRoutes';
import Loader from './components/Loader/Loader';
import Footer from '../src/components/footer/Footer';
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
   
    <Router>
 <Loader/>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList setCartItems={setCartItems} />}
          />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path='/mycart' element={<MyCart />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          
        </Routes>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;

