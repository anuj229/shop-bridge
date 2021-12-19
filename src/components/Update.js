import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Edit = () => {
  const { id } = useParams();

  let navigate = useNavigate();
  const { items, setItems } = useGlobalContext();
  const user = items.filter((user) => user.id == id);
  const [data, setData] = useState({
    id: id,
    name: user[0].name,
    description: user[0].description,
    price: user[0].price,
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
      <Form onSubmit={() => handleSubmit()}>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Link to="/">
          <Button variant="warning">Back Home</Button>{" "}
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
