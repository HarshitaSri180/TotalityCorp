import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { setCartData, setLoading } from "../../store/slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";
const ProductList = ({ cartItems, setCartItems }) => {
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const products = [
    {
      rating: "⭐⭐⭐⭐⭐",
      id: 1,
      name: "Apartment",
      description: "New Delhi",
      price: 40650000,
      image: "https://wallpapercave.com/wp/wp3604667.jpg",
    },
    {
      rating: "⭐⭐",
      id: 2,
      name: "Villa",
      description: "Kolkata",
      price: 30000000,
      image: "https://wallpapercave.com/wp/wp3604667.jpg",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      id: 3,
      name: "Bunglow Luxuary",
      description: "Gurgaon",
      price: 20000000.99,
      image: "https://wallpapercave.com/wp/wp3604667.jpg",
    },
    {
      rating: "⭐⭐⭐",
      id: 4,
      name: "House 6BHK",
      description: "Noida",
      price: 500000000.99,
      image: "https://wallpapercave.com/wp/wp3604667.jpg",
    },
    {
      rating: "⭐⭐⭐⭐",
      id: 5,
      name: "Flat 4BHK",
      description: "Delhi",
      price: 8900000,
      image: "https://wallpapercave.com/wp/wp3604667.jpg",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      id: 6,
      name: "Apartment 3BHK",
      description: "Lucknow",
      price: 5600000,
      image: "https://wallpapercave.com/wp/wp3604667.jpg",
    },
    // Add more sample products
  ];

  const [addedToCart, setAddedToCart] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
    toast.success("Added to Cart!");
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container mb-4">
      <h2 className="mt-4 mb-4">Product List</h2>
      <Button variant="primary mb-4" onClick={handleShow}>
        Filter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header x>
          <Modal.Title>Search your products</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>

      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-link">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h2 className="product-name fw-bolder">{product.name}</h2>
                  <h6 className="product-description fw-bolder">
                    {product.description}
                  </h6>

                  <p className="product-price">Price: ${product.price}</p>
                  <div className="rating">{product.rating}</div>
                </div>
              </Link>
              <button
                onClick={() => {
                  dispatch(setCartData(product));
                  addToCart(product);
                }}
                className="add-to-cart-button"
                disabled={addedToCart[product.id]}
              >
                {addedToCart[product.id] ? "Added" : "Buy Now"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default ProductList;
