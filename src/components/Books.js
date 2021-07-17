import BookItem from './BookItem';
import './Books.css';

const Books = ({ books }) => {
   return (
      <div className="books">
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
      </div>
   );
};

export default Books;
