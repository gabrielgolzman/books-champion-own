import './BookItem.css';

const BookItem = () => {
   const bookDate = new Date('2021-07-12');
   const bookTitle = '100 años de soledad';
   const bookPageCount = 410;
   return (
      <div className="book-item">
         <div>{bookDate.toISOString()}</div>
         <div className="book-item-description">
            <h2>{bookTitle}</h2>
            <div className="book-item-page-count">{bookPageCount} páginas</div>
         </div>
      </div>
   );
};

export default BookItem;
