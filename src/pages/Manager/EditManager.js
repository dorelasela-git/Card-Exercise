import React, { useState, useContext } from "react";
import { Form, Button, Container,Col,Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ContextShop from "../../context/ContextShop";
import Layout from "../../components/Layout/Layout";
import Card from "react-bootstrap/Card";

const EditProductForm = () => {
  const { id } = useParams();
  const { editProduct, totalItems } = useContext(ContextShop);
  const product = totalItems.find((item) => item.id === parseInt(id));

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [productImage, setProductImage] = useState(product.productImage);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name,
      description,
      price,
      productImage,
    };

    editProduct(updatedProduct);
    navigate("/shop/manager");
  };

  return (
    <Layout>
      <Container>
        <Row>
        <Col md={6}>
        <h2>Edit Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="id">
            <Form.Label>ID:</Form.Label>
            <Form.Control
                type="text"
                value={id}
                onChange={(e) => setName(e.target.value)} readOnly
            />
          </Form.Group>
          <Form.Group>
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

          <Form.Group controlId="image">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="text"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
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

          <Button className="my-3" variant="dark" type="submit">
            Update Product
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
export default EditProductForm;
