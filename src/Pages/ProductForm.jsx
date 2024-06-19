import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { addNewProduct, getProductById, editProduct } from '../API/productAPI.js';
import { useNavigate, useParams } from "react-router-dom";

export function ProductForm() {
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        quantity: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== '0') {
            getProductById(id)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                    setError('Failed to fetch product details');
                });
        }
    }, [id]);

    const formHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const apiCall = id === '0' ? addNewProduct(formData) : editProduct(id, formData);
        
        apiCall
            .then(() => {
                setLoading(false);
                navigate('/products');
            })
            .catch(error => {
                console.error('Error saving product:', error);
                setError('Failed to save product');
                setLoading(false);
            });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="p-4 rounded bg-light shadow-sm">
                        <h2 className="mb-4">{id === '0' ? 'Add New Product' : 'Edit Product'}</h2>
                        {error && <p className="text-danger">{error}</p>}
                        <Form onSubmit={addHandler}>
                            <Form.Group className="mb-3" controlId="formProductName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    onChange={formHandler}
                                    type="text"
                                    placeholder="Enter Product Name"
                                    name='productName'
                                    value={formData.productName}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    onChange={formHandler}
                                    type="number"
                                    placeholder="Enter Price"
                                    name='price'
                                    value={formData.price}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    onChange={formHandler}
                                    type="number"
                                    placeholder="Enter Quantity"
                                    name='quantity'
                                    value={formData.quantity}
                                    required
                                />
                            </Form.Group>

                            <Button variant="dark" type="submit" className="w-100" disabled={loading}>
                                {loading ? 'Submitting...' : (id === '0' ? 'Add New Product' : 'Edit Product')}
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
