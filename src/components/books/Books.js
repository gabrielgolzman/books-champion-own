import { useState } from 'react';

import './Books.css';

import BooksList from './BooksList';
import BooksFilter from './BooksFilter';

const Books = ({ books }) => {
   const [yearSelected, setYearSelected] = useState('2021');

   const onFilterYear = (year) => {
      setYearSelected(year);
   };

   const filteredBooks = books.filter(
      (book) => book.dateRead.getFullYear().toString() === yearSelected
   );

   return (
      <>
         <div>
            <BooksFilter
               filterYear={yearSelected}
               onFilterYear={onFilterYear}
            />
         </div>
         <div className="books-container">
            <BooksList books={filteredBooks} filterYear={yearSelected} />
         </div>
      </>
   );
};

export default Books;
