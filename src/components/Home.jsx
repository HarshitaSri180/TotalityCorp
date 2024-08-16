import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.png'
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import banner3 from '../assets/images/banner3.png'
import Slider_product from './slider_product/Slider_product';
import Cto from './cto/cto';
// import Circular_products from './Circular_products';
const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    hover:true,
    autoplay: true,
  };
  const sliderSettings6 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...sliderSettings}>
        {/* Your slider content goes here */} 
        <div> 
        <Link to="/demo2">
          <img
            src={banner1}
            alt="Slide 1"
          />
        </Link>
        </div>
        <div>
          <img
            src={banner2}
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src={banner3}
            alt="Slide 3"
          />
        </div>
      </Slider>
      <Slider_product/>
      <Cto/>
    </div>
      

  );
};

export default Home;
