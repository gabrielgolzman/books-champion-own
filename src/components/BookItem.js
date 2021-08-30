import './BookItem.css';

import ReadDate from './ReadDate';
import BookCard from './BookCard';

const BookItem = ({ title, author, dateRead, pageCount }) => {
   return (
      <BookCard>
         <h2>{title}</h2>
         <h3>{author}</h3>
         <ReadDate date={dateRead} />
         <p>{pageCount} páginas</p>
      </BookCard>
   );
};

export default BookItem;
