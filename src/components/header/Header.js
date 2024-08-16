import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const { cartData } = useSelector(state => state.cart)
  const [scroll , scrollHeader] = useState("Header")
  window.onscroll = () =>{
    let x = window.scrollY;
    let temp = ''
    if(x>100){
      temp = "Header sticky"
    }
    else{
      temp = "Header"
    }
    return scrollHeader(temp);
  }

  return (

    <header className={scroll}>
      <div className='container'>
      <div className="logo">
        <div className='contact-details '>Call Us:945784574</div>
        <Link to="/">JADE TROU</Link>
        <div className='Right-icons'>
        <li><Link to="/signin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></Link></li>
        <li><Link to="/signup">Singup</Link></li>
        <li><Link to="/signup">Logout</Link></li>

        <li><Link to="/mycart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg> ({cartData.length})</Link></li>
        </div>
      </div>
      <div className='bottom-menu'>
      <nav className='d-flex justify-content-center'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">House Filter</Link></li>
          <li><Link to="/products">Collection</Link></li>
          <li><Link to="/products">Aboutus</Link></li>
        </ul>
      </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
