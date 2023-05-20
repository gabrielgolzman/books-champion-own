import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Books from "./components/books/Books";
import NewBook from "./components/form/NewBook";
import { Col } from "react-bootstrap";

// const DUMMY_BOOKS = [
//   {
//     id: "a1",
//     title: "100 años de soledad",
//     author: "Gabriel García Marquez",
//     pageCount: 410,
//     dateRead: new Date(2020, 7, 12),
//   },
//   {
//     id: "a2",
//     title: "Todos los fuegos el fuego",
//     author: "Julio Cortazar",
//     pageCount: 197,
//     dateRead: new Date(2021, 6, 11),
//   },
//   {
//     id: "a3",
//     title: "Asesinato en el Orient Express",
//     author: "Agatha Christie",
//     pageCount: 256,
//     dateRead: new Date(2020, 5, 9),
//   },
//   {
//     id: "a4",
//     title: "Las dos torres",
//     author: "J.R.R Tolkien",
//     pageCount: 352,
//     dateRead: new Date(2021, 3, 22),
//   },
// ];

const Dashboard = ({ onSignOut }) => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const addedBookHandler = (bookData) => {
    const dateString = bookData.dateRead.toISOString().slice(0, 10);

    fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: bookData.title,
        author: bookData.author,
        dateRead: dateString,
        pageCount: parseInt(bookData.pageCount, 10),
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("The response has some errors!");
        }
      })
      .then(() => {
        const newBooksArray = [bookData, ...books];
        setBooks(newBooksArray);
      })
      .catch((error) => console.log(error));
  };

  const logOutHandler = () => {
    onSignOut();
    navigate("/login");
  };

  useEffect(() => {
    fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((bookData) => {
        const booksMapped = bookData.map((book) => ({
          ...book,
          dateRead: new Date(book.dateRead),
        }));
        setBooks(booksMapped);
      })
      .catch((error) => console.log(error));
  }, []);

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
