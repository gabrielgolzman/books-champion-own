import { memo, useState } from "react";

import "./NewBook.css";

import BookForm from "./BookForm";

const NewBook = memo(({ onBookAdded }) => {
  console.log("new Book");
  const [showForm, setShowForm] = useState(false);
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    onBookAdded(bookData);
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  if (!showForm) {
    return (
      <div className="new-book">
        <button className="new-book-button" onClick={toggleShowForm}>
          Registrar nueva lectura
        </button>
      </div>
    );
  }

  return (
    <div className="new-book">
      <BookForm
        onToggleForm={toggleShowForm}
        onBookDataSaved={saveBookDataHandler}
      />
    </div>
  );
});

export default NewBook;
