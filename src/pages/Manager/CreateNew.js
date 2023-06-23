import React, { useContext, useState } from "react";
import { Form, Button, Row, Container,Col } from "react-bootstrap";
import ContextShop from "../../context/ContextShop";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Card from "react-bootstrap/Card";

const CreateNewProduct = () => {
  const [name, setName] = useState("");
  const [productImage, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const { createManager } = useContext(ContextShop);
  const navigate = useNavigate();

  const createHandle = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price,
      productImage,
      id: Date.now(),
      quantity: 0,
    };

    createManager(newProduct);
    navigate("/shop/manager");
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
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

          </Col>

    <Col>
            <Form.Group controlId="image">
              <Card.Img
                  variant="top"
                  src={productImage}
                  style={{ width: "100%", height: "auto", objectFit: "fill" }}
              />
            </Form.Group>
    </Col>

        </Row>
      </Container>
    </Layout>
  );
};

export default CreateNewProduct;
