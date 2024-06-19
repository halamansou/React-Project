import React, { useEffect, useState } from 'react';
import { Button, Spinner, Container, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../API/productAPI.js';

export function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const backToProducts = () => {
    navigate('/products');
  };

  return (
    <Container className="py-5">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          <h4>Error loading product details</h4>
          <p>{error.message}</p>
        </Alert>
      ) : (
        <div className="bg-dark text-light p-5 rounded">
          <h1 className="mb-4">Product Details: {id}</h1>
          <p className="lead">Product Name: {product.productName}</p>
          <p className="lead">Price: {product.price}</p>
          <Button variant="success" onClick={backToProducts} className="mt-4">
            Back to Products
          </Button>
        </div>
      )}
    </Container>
  );
}
