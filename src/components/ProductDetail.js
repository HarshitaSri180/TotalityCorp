// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
const ProductDetail = () => {
  // Use the useParams hook to get the productId from the URL
  const { productId } = useParams();

  // Placeholder array of products (replace this with your actual data fetching logic)
  const products = [
    {
      "id": 1,
      "name": "Apartment 1BHK  ",
      "description": "Product 1 description",
      "price": 10000000,
      "image": "https://tse3.mm.bing.net/th?id=OIP.HqZjKX_xkTesYF2xNWBy7wHaEK&pid=Api&P=0&h=180",
      "rating":"⭐⭐⭐"
    },
    {
      "rating":"⭐",
      "id": 2,
      "name": "Plant Based Keema Samosa",
      "description": "Product 2 description",
      "price": 20.99,
      "image": "https://tse3.mm.bing.net/th?id=OIP.HqZjKX_xkTesYF2xNWBy7wHaEK&pid=Api&P=0&h=180"
    },
    {
      "rating":"⭐⭐⭐",
      "id": 3,
      "name": "Plant Based Chicken Miracle",
      "description": "Product 3 description",
      "price": 30.99,
      "image": "https://tse3.mm.bing.net/th?id=OIP.HqZjKX_xkTesYF2xNWBy7wHaEK&pid=Api&P=0&h=180"
    },
    {
      "id": 4,
      "name": "Veg Kebabs & Samosa Combo",
      "description": "Product 4 description",
      "price": 30.99,
      "image": "https://tse3.mm.bing.net/th?id=OIP.HqZjKX_xkTesYF2xNWBy7wHaEK&pid=Api&P=0&h=180",
      "rating":"⭐⭐⭐⭐"
    },
    {
      "id": 5,
      "name": "Product 4",
      "description": "Product 4 description",
      "price": 30.99,
      "image": "https://cdn.shopify.com/s/files/1/0618/5451/5433/products/Artboard7_720x.png?v=1660911795",
      "rating":"⭐⭐"
    },
    {
      "id": 6,
      "name": "Jhaatu",
      "description": "Product 4 description",
      "price": 30.99,
      "image": "https://cdn.shopify.com/s/files/1/0618/5451/5433/products/Artboard7_720x.png?v=1660911795",
      "rating":"⭐⭐"
    },
    {
      "rating":"⭐⭐⭐⭐",
      "id": 7,
      "name": "Product 3",
      "description": "This is product 4 description",
      "price": 80,
      "image": "https://cdn.shopify.com/s/files/1/0618/5451/5433/products/Artboard1_d8fe27e7-8fa1-4dca-b59b-92475485a5ce_720x.png?v=1661448954"
    },
    // Add more sample products
  ];

  // Find the product with the matching productId
  const product = products.find((product) => product.id === parseInt(productId, 10));

  // If the product is not found, you can handle it accordingly (e.g., display an error message)
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
<div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-description">{product.description}</p>
    
      </div>
    </div>
  );
};

export default ProductDetail;
