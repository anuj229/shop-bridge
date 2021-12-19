import React from "react";
import { useGlobalContext } from "../Context";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const { items, setItems } = useGlobalContext();
  console.log(items);
  return (
    <>
      <div className="container">
        <div className="create">
          <Link to="/create">
            <Button variant="warning">Add Item</Button>{" "}
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={"/view/" + item.id}>
                      <Button variant="success">View</Button>{" "}
                    </Link>
                    <Link to={"/update/" + item.id}>
                      <Button variant="info">Edit</Button>{" "}
                    </Link>
                    <Link to={"/delete/" + item.id}>
                      <Button variant="danger">delete</Button>{" "}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
