import './BooksList.css';

import BookItem from './BookItem';

const BooksList = ({ books, filterYear }) => {
   if (books.length === 0) {
      return (
         <h2 className="no-books-read">¡No leíste libros en {filterYear}!</h2>
      );
   }

   return books.map((book) => (
      <BookItem
         key={book.id}
         title={book.title}
         author={book.author}
         pageCount={book.pageCount}
         dateRead={book.dateRead}
      />
   ));
};

export default BooksList;
