import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the product ID from the URL
import './details.css';

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log(`Fetching details for product with ID: ${id}`); // Fixed template string

        const response = await fetch(`https://fakestoreapi.com/products/${id}`); // Fixed template string and URL

        if (!response.ok) {
          throw new Error('Product not found or failed to fetch');
        }

        const data = await response.json();
        console.log('Product data:', data);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError(err.message);
      } finally {
        setLoading(false); // Ensures loading state is updated in both success and error cases
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error fetching product details: {error}</p>;
  }

  return (
    <div className="product-details">
      {product ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} className="product-images" />
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
        </>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
}

export default ProductDetails;
