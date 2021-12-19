import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
import "../App.css";

const Create = () => {
  const navigate = useNavigate();
  const { items, setItems } = useGlobalContext();
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, data]);
    console.log(items);
    navigate("/");
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Id</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter Id"
            name="id"
            value={data.id}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter description"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter Price"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className="submit">
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Link to="/">
            <Button variant="warning">Back Home</Button>{" "}
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Create;
