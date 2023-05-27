import { useReducer, useState } from "react";
import "./BookForm.css";

const initialBookForm = {
  title: "",
  author: "",
  dateRead: "",
  pageCount: "",
  formValid: false,
};

const bookFormReducer = (state, action) => {
  switch (action.type) {
    case "TITLE_UPDATED":
      return {
        ...state,
        title: action.value,
        formValid:
          action.value && state.author && state.pageCount && state.dateRead,
      };
    case "AUTHOR_UPDATED":
      return {
        ...state,
        author: action.value,
        formValid:
          action.value && state.title && state.pageCount && state.dateRead,
      };
    case "DATE_READ_UPDATED":
      return {
        ...state,
        dateRead: action.value,
        formValid:
          action.value && state.author && state.pageCount && state.title,
      };
    case "PAGE_COUNT_UPDATED":
      return {
        ...state,
        pageCount: action.value,
        formValid:
          action.value && state.author && state.title && state.dateRead,
      };
    case "RESET_FORM":
      return initialBookForm;
    default:
      return state;
  }
};

const BookForm = ({ onBookDataSaved, onToggleForm }) => {
  const [bookForm, dispatch] = useReducer(bookFormReducer, initialBookForm);

  const submitBookHandler = (event) => {
    event.preventDefault();
    const bookData = {
      title: bookForm.title,
      author: bookForm.author,
      pageCount: bookForm.pageCount,
      dateRead: new Date(bookForm.dateRead),
    };
    onBookDataSaved(bookData);
    dispatch({
      type: "RESET_FORM",
    });
  };

  const changeTitleHandler = (event) => {
    dispatch({
      type: "TITLE_UPDATED",
      value: event.target.value,
    });
  };
  const changeAuthorHandler = (event) => {
    dispatch({
      type: "AUTHOR_UPDATED",
      value: event.target.value,
    });
  };
  const changePageCountHandler = (event) => {
    dispatch({
      type: "PAGE_COUNT_UPDATED",
      value: event.target.value,
    });
  };
  const changeDateHandler = (event) => {
    dispatch({
      type: "DATE_READ_UPDATED",
      value: event.target.value,
    });
  };
  return (
    <form>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Título</label>
          <input
            type="text"
            className="input-control"
            value={bookForm.title}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input
            type="text"
            className="input-control"
            value={bookForm.author}
            onChange={changeAuthorHandler}
          />
        </div>
        <div className="new-book-control">
          <label>Páginas</label>
          <input
            type="number"
            className="input-control"
            min="1"
            step="1"
            onChange={changePageCountHandler}
            value={bookForm.pageCount}
          />
        </div>
        <div className="new-book-control">
          <label>¿Cuándo terminaste de leerlo?</label>
          <input
            type="date"
            className="input-control"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
            value={bookForm.dateRead}
          />
        </div>
      </div>
      <div className="new-book-actions">
        <button onClick={onToggleForm}>Cancelar</button>
        <button
          disabled={!bookForm.formValid}
          onClick={submitBookHandler}
          type="button"
        >
          Agregar lectura
        </button>
      </div>
    </form>
  );
};

export default BookForm;
