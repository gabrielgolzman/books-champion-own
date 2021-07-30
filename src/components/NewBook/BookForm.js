import { useState } from 'react';

import './BookForm.css';

const BookForm = ({ onBookDataSaved }) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredPageCount, setPageCount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

   const changeTitleHandler = (event) => {
      setEnteredTitle(event.target.value);
   };
   const changePageCountHandler = (event) => {
      setPageCount(event.target.value);
   };
   const changeDateHandler = (event) => {
      setEnteredDate(event.target.value);
   };
   const submitBookHandler = (event) => {
      event.preventDefault();
      const bookData = {
         title: enteredTitle,
         pageCount: enteredPageCount,
         dateRead: new Date(enteredDate),
      };
      onBookDataSaved(bookData);
      setEnteredTitle('');
      setPageCount('');
      setEnteredDate('');
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
               <label>Páginas</label>
               <input
                  type="number"
                  min="1"
                  step="1"
                  value={enteredPageCount}
                  onChange={changePageCountHandler}
               />
            </div>
            <div className="new-book-control">
               <label>¿Cuándo terminaste de leerlo?</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  value={enteredDate}
                  onChange={changeDateHandler}
               />
            </div>
         </div>
         <div className="new-book-actions">
            <button type="submit">Agregar lectura</button>
         </div>
      </form>
   );
};

export default BookForm;
