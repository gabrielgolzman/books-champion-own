import BookItem from './components/BookItem';

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
   return (
      <div>
         <h2>Books Champion App</h2>
         <p>I want to read some books!</p>
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

export default App;
