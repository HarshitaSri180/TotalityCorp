// src/components/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product details from an API
    const fetchProductDetails = async () => {
      // Replace this with actual API call
      const response = await fetch(
        `https://api.example.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
