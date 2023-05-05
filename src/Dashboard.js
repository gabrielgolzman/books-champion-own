import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Books from "./components/books/Books";
import NewBook from "./components/form/NewBook";
import { Col } from "react-bootstrap";

const DUMMY_BOOKS = [
  {
    id: "a1",
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    pageCount: 410,
    dateRead: new Date(2020, 7, 12),
  },
  {
    id: "a2",
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    pageCount: 197,
    dateRead: new Date(2021, 6, 11),
  },
  {
    id: "a3",
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    pageCount: 256,
    dateRead: new Date(2020, 5, 9),
  },
  {
    id: "a4",
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    pageCount: 352,
    dateRead: new Date(2021, 3, 22),
  },
];

const Dashboard = ({ onSignOut }) => {
  const [books, setBooks] = useState(DUMMY_BOOKS);

  const navigate = useNavigate();

  const addedBookHandler = (bookData) => {
    const newBooksArray = [bookData, ...books];
    setBooks(newBooksArray);
  };

  const logOutHandler = () => {
    onSignOut();
    navigate("/login");
  };

  return (
    <>
      <Row>
        <Col />
        <Col md={3} className="mx-3 d-flex justify-content-end">
          <Button className="m-4" variant="primary" onClick={logOutHandler}>
            Cerrar Sesión
          </Button>
        </Col>
      </Row>
      <h2>Books Champion App</h2>
      <NewBook onBookAdded={addedBookHandler} />
      <Books books={books} />
    </>
  );
};

export default Dashboard;
