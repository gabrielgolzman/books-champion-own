import { useState } from 'react';
import './BookForm.css';

const BookForm = ({ onBookDataSaved, onToggleForm }) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAuthor, setEnteredAuthor] = useState('');
   const [enteredPageCount, setPageCount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

   const submitBookHandler = (event) => {
      event.preventDefault();
      const bookData = {
         title: enteredTitle,
         author: enteredAuthor,
         pageCount: enteredPageCount,
         dateRead: new Date(enteredDate),
      };
      onBookDataSaved(bookData);
      setEnteredTitle('');
      setEnteredAuthor('');
      setPageCount('');
      setEnteredDate('');
   };

   const changeTitleHandler = (event) => {
      setEnteredTitle(event.target.value);
   };
   const changeAuthorHandler = (event) => {
      setEnteredAuthor(event.target.value);
   };
   const changePageCountHandler = (event) => {
      setPageCount(event.target.value);
   };
   const changeDateHandler = (event) => {
      setEnteredDate(event.target.value);
   };
   return (
      <form onSubmit={submitBookHandler}>
         <div className="new-book-controls">
            <div className="new-book-control">
               <label>Título</label>
               <input
                  type="text"
                  value={enteredTitle}
                  onChange={changeTitleHandler}
               />
            </div>
            <div className="new-book-control">
               <label>Autor</label>
               <input
                  type="text"
                  value={enteredAuthor}
                  onChange={changeAuthorHandler}
               />
            </div>
            <div className="new-book-control">
               <label>Páginas</label>
               <input
                  type="number"
                  min="1"
                  step="1"
                  onChange={changePageCountHandler}
                  value={enteredPageCount}
               />
            </div>
            <div className="new-book-control">
               <label>¿Cuándo terminaste de leerlo?</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  onChange={changeDateHandler}
                  value={enteredDate}
               />
            </div>
         </div>
         <div className="new-book-actions">
            <button onClick={onToggleForm}>Cancelar</button>
            <button onClick={onToggleForm} type="submit">
               Agregar lectura
            </button>
         </div>
      </form>
   );
};

export default BookForm;
