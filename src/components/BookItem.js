import './BookItem.css';

import ReadDate from './ReadDate';
import BookCard from './BookCard';

const BookItem = ({ title, author, dateRead, pageCount }) => {
   const changeTitle = () => {
      console.log('Clicked!!');
   };

   return (
      <BookCard>
         <h2>{title}</h2>
         <h3>{author}</h3>
         <ReadDate date={dateRead} />
         <p>{pageCount} páginas</p>
         <button onClick={changeTitle}>Cambiar titulo</button>
      </BookCard>
   );
};

export default BookItem;
