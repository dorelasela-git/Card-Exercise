import React, { useContext, useState } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import ContextShop from "../../context/ContextShop";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const CreateNewProduct = () => {
  const [name, setName] = useState("");
  const [productImage, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const { createManager } = useContext(ContextShop);
  const navigate = useNavigate();

  const createHandle = (e) => {
    e.preventDefault();
    // Validate the form fields here if needed

    // Create a new product object
    const newProduct = {
      name,
      description,
      price,
      productImage,
      id: Date.now(),
      quantity: 0,
    };

    // Add the new product using the provided addProduct function
    createManager(newProduct);
    navigate("/shop/manager");
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Form onSubmit={createHandle}>
            <h2>Create New Product</h2>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                value={productImage}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Button className="my-3" variant="dark" type="submit">
              Add Product
            </Button>
          </Form>
        </Row>
      </Container>
    </Layout>
  );
};

export default CreateNewProduct;
