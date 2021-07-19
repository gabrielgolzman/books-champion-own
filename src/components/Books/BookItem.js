import Card from '../UI/Card';
import ReadDate from './ReadDate';
import './BookItem.css';

const BookItem = ({ title, pageCount, date }) => {
   return (
      <Card className="book-item">
         <ReadDate date={date} />
         <div className="book-item-description">
            <h2>{title}</h2>
            <div className="book-item-page-count">{pageCount} páginas</div>
         </div>
      </Card>
   );
};

export default BookItem;
