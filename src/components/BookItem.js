import ReadDate from './ReadDate';
import './BookItem.css';

const BookItem = ({ title, pageCount, date }) => {
   return (
      <div className="book-item">
         <ReadDate date={date} />
         <div className="book-item-description">
            <h2>{title}</h2>
            <div className="book-item-page-count">{pageCount} páginas</div>
         </div>
      </div>
   );
};

export default BookItem;
