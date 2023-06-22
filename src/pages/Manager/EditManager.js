import React, { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ContextShop from "../../context/ContextShop";
import Layout from "../../components/Layout/Layout";

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
    // Validate the form fields here if needed

    // Create a new product object
    const newProduct = {
      ...product,
      name,
      description,
      price,
      productImage,
    };

    // Add the new product using the provided editProduct function
    editProduct(newProduct);
    navigate("/shop/manager");
  };

  return (
    <Layout>
      <Container>
        <h2>Edit Product</h2>
        <Form onSubmit={handleSubmit}>
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
      </Container>
    </Layout>
  );
};
export default EditProductForm;
