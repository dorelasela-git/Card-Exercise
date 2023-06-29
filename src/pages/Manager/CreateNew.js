import React, { useContext, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import ContextShop from "../../context/ContextShop";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Card from "react-bootstrap/Card";

const CreateNewProduct = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [category, setCategory] = useState("");
  const { createManager } = useContext(ContextShop);
  const navigate = useNavigate();

  const createHandle = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      quantity: 0,
      category,
    };
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
            <Form.Group>
              <Form.Label>Category:</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
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
