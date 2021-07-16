import './BookItem.css';

const BookItem = ({ title, pageCount, date }) => {
   const month = date.toLocaleString('es-AR', { month: 'long' });
   const year = date.getFullYear();
   const day = date.toLocaleString('es-AR', { day: '2-digit' });

   return (
      <div className="book-item">
         <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
         </div>
         <div className="book-item-description">
            <h2>{title}</h2>
            <div className="book-item-page-count">{pageCount} páginas</div>
         </div>
      </div>
   );
};

export default BookItem;
