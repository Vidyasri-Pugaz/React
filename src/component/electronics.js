import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseFetch from './usefetch';
import './electronics.css';

function Electronics() {
  const navigate = useNavigate();
  const [data, loading, error] = UseFetch("https://fakestoreapi.com/products/category/electronics");

  const [buttonText, setButtonText] = useState("Add To Cart"); // State to toggle button text

  const handleAddToCart = (itemId) => {
    navigate(`/cart/${itemId}`);
  };

  const handleViewDetails = (itemId) => {
    navigate(`/product/${itemId}`);
  };

  const toggleButton = () => {
    setButtonText((prevText) => (prevText === "Add To Cart" ? "View Details" : "Add To Cart"));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="electronics-card-container">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="electronics-card">
            <h3>ID={item.id}</h3>
            <hr />
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="electronics item-image" />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <div className="electronics button-container">
              <button className="btn" onClick={() => toggleButton()}>
                {buttonText}
              </button>
              {buttonText === "Add To Cart" ? (
                <button className="btn" onClick={() => handleAddToCart(item.id)}>
                  Add To Cart
                </button>
              ) : (
                <button className="btn" onClick={() => handleViewDetails(item.id)}>
                  View Details
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Electronics;
