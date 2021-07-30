import { useState } from 'react';

import BookItem from './BookItem';
import Card from '../UI/Card';
import './Books.css';
import BooksFilter from '../Filter/BooksFilter';

const Books = ({ books }) => {
   const [filteredYear, setFilteredYear] = useState('2021');

   const filterYearHandler = (newFilterYear) => {
      setFilteredYear(newFilterYear);
   };
   return (
      <Card className="books">
         <BooksFilter
            selected={filteredYear}
            onFilterYearChanged={filterYearHandler}
         />
         <BookItem
            title={books[0].title}
            pageCount={books[0].pageCount}
            date={books[0].date}
         />
         <BookItem
            title={books[1].title}
            pageCount={books[1].pageCount}
            date={books[1].date}
         />
         <BookItem
            title={books[2].title}
            pageCount={books[2].pageCount}
            date={books[2].date}
         />
         <BookItem
            title={books[3].title}
            pageCount={books[3].pageCount}
            date={books[3].date}
         />
      </Card>
   );
};

export default Books;
