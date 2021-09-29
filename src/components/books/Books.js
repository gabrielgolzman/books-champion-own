import { useState } from 'react';

import './Books.css';

import BookItem from './BookItem';
import BooksFilter from './BooksFilter';

const Books = ({ books }) => {
   const [yearSelected, setYearSelected] = useState('2021');

   const onFilterYear = (year) => {
      setYearSelected(year);
   };
   return (
      <>
         <div>
            <BooksFilter
               filterYear={yearSelected}
               onFilterYear={onFilterYear}
            />
         </div>
         <div className="books-container">
            <BookItem
               title={books[0].title}
               author={books[0].author}
               dateRead={books[0].dateRead}
               pageCount={books[0].pageCount}
            />
            <BookItem
               title={books[1].title}
               author={books[1].author}
               dateRead={books[1].dateRead}
               pageCount={books[1].pageCount}
            />
            <BookItem
               title={books[2].title}
               author={books[2].author}
               dateRead={books[2].dateRead}
               pageCount={books[2].pageCount}
            />
            <BookItem
               title={books[3].title}
               author={books[3].author}
               dateRead={books[3].dateRead}
               pageCount={books[3].pageCount}
            />
         </div>
      </>
   );
};

export default Books;
