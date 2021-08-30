import { useState } from 'react';

import './BookItem.css';

import ReadDate from './ReadDate';
import BookCard from '../ui/BookCard';

const BookItem = ({ title, author, dateRead, pageCount }) => {
   const [newTitle, setNewTitle] = useState(title);
   const changeTitle = () => {
      setNewTitle('Actualizado!');
      console.log('Clicked!!');
   };

   return (
      <BookCard>
         <h2>{newTitle}</h2>
         <h3>{author}</h3>
         <ReadDate date={dateRead} />
         <p>{pageCount} páginas</p>
         <button onClick={changeTitle}>Cambiar titulo</button>
      </BookCard>
   );
};

export default BookItem;
