import Books from './components/Books/Books';
import NewBook from './components/NewBook/NewBook';

const App = () => {
   const books = [
      {
         title: '100 años de soledad',
         pageCount: 410,
         date: new Date('2021-07-12'),
      },
      {
         title: 'Todos los fuegos el fuego',
         pageCount: 197,
         date: new Date('2021-06-11'),
      },
      {
         title: 'Asesinato en el Orient Express',
         pageCount: 256,
         date: new Date('2021-05-09'),
      },
      {
         title: 'Las dos torres',
         pageCount: 352,
         date: new Date('2021-03-22'),
      },
   ];

   const addedBookHandler = (bookData) => {
      console.log('In App.js');
      console.log(bookData);
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
