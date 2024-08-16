// ProductSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider_product.css'
import { hover } from '@testing-library/user-event/dist/hover';

const products = [
  {
    "id": 1,
    "name": "Luxuary House",
    "description": "Product 4 description",
    "price": 45000000,
    "image": "https://cdn.shopify.com/s/files/1/0567/3873/products/Modern5BedroomDoubleStoreyHouse-ID25506-Perspective.jpg_1.jpg?v=1622900535",
    "rating": "⭐⭐"
  },
 
  {
    "id": 3,
    "name": "Luxuary House",
    "description": "Product 4 description",
    "price": 45000000,
    "image": "https://cdn.shopify.com/s/files/1/0567/3873/products/Modern5BedroomDoubleStoreyHouse-ID25506-Perspective.jpg_1.jpg?v=1622900535",
    "rating": "⭐⭐"
  },
  {
    "id": 5,
    "name": "Luxuary House",
    "description": "Product 4 description",
    "price": 45000000,
    "image": "https://cdn.shopify.com/s/files/1/0567/3873/products/Modern5BedroomDoubleStoreyHouse-ID25506-Perspective.jpg_1.jpg?v=1622900535",
    "rating": "⭐⭐"
  },
  {
    "id": 6,
    "name": "Luxuary House",
    "description": "Product 4 description",
    "price": 45000000,
    "image": "https://cdn.shopify.com/s/files/1/0567/3873/products/Modern5BedroomDoubleStoreyHouse-ID25506-Perspective.jpg_1.jpg?v=1622900535",
    "rating": "⭐⭐"
  },
  {
    "id": 7,
    "name": "Luxuary House",
    "description": "Product 4 description",
    "price": 45000000,
    "image": "https://cdn.shopify.com/s/files/1/0567/3873/products/Modern5BedroomDoubleStoreyHouse-ID25506-Perspective.jpg_1.jpg?v=1622900535",
    "rating": "⭐⭐"
  },
  // Add more sample products
];

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    hover:true,
    Arrow:false,
    Animation:true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
   <>
   <div className="Slider_product">
    <h1  className="m-4"style={{textAlign:"center"}} >Our Best Selling Houses </h1>
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id} className="product-slide  ms-4">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
         
           <p>{product.description}</p> 
          <p>${product.price}</p> 
          {/* <div className="product-rating">{product.rating}</div> */}
        </div>
      ))}
    </Slider>
    </div>
    </>
  );
};

export default ProductSlider;
