import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ContextShop from "../../context/ContextShop";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

const EditProductForm = () => {
  const { id } = useParams();
  const { editProduct, totalItems } = useContext(ContextShop);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const product = totalItems.find((item) => item.id === parseInt(id));

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      const productData = response.data;
      setTitle(productData.title);
      setThumbnail(productData.thumbnail);
      setDescription(productData.description);
      setCategory(productData.category);
      setPrice(productData.price.toString());
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      title,
      thumbnail,
      description,
      category,
      price,
    };
    axios
      .put(`https://dummyjson.com/products/${id}`, updatedProduct)
      .then((response) => {
        const updatedProduct = response.data;
        console.log(updatedProduct);
        alert("Product updated successfully");
        navigate("/shop/manager");
      })
      .catch((error) => {
        console.error(error);
      });
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

          <Form.Group controlId="image">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
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
