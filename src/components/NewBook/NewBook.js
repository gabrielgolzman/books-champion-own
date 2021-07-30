import BookForm from './BookForm';

import './NewBook.css';

const NewBook = ({ onBookAdded }) => {
   const saveBookDataHandler = (enteredBookData) => {
      const bookData = {
         ...enteredBookData,
         id: Math.random().toString(),
      };
      onBookAdded(bookData);
   };

   return (
      <div className="new-book">
         <BookForm onBookDataSaved={saveBookDataHandler} />
      </div>
   );
};

export default NewBook;
