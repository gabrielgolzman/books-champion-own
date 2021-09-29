import { useState } from 'react';

import './App.css';

import Books from './components/books/Books';
import NewBook from './components/form/NewBook';

const DUMMY_BOOKS = [
   {
      title: '100 años de soledad',
      author: 'Gabriel García Marquez',
      pageCount: 410,
      dateRead: new Date(2020, 7, 12),
   },
   {
      title: 'Todos los fuegos el fuego',
      author: 'Julio Cortazar',
      pageCount: 197,
      dateRead: new Date(2021, 6, 11),
   },
   {
      title: 'Asesinato en el Orient Express',
      author: 'Agatha Christie',
      pageCount: 256,
      dateRead: new Date(2020, 5, 9),
   },
   {
      title: 'Las dos torres',
      author: 'J.R.R Tolkien',
      pageCount: 352,
      dateRead: new Date(2021, 3, 22),
   },
];

const App = () => {
   const [books, setBooks] = useState(DUMMY_BOOKS);

   const addedBookHandler = (bookData) => {
      const newBooksArray = [bookData, ...books];
      setBooks(newBooksArray);
   };

   return (
      <div>
         <h2>Books Champion App</h2>
         <NewBook onBookAdded={addedBookHandler} />
         <Books books={books} />
      </div>
   );
};

export default App;
