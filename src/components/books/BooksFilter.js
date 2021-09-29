import './BooksFilter.css';

const BooksFilter = ({ filterYear, onFilterYear }) => {
   const onYearSelected = (event) => {
      onFilterYear(event.target.value);
   };

   console.log(filterYear);
   return (
      <div className="Books-filter">
         <div className="Books-filter__control">
            <select value={filterYear} onChange={onYearSelected}>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
            </select>
         </div>
      </div>
   );
};

export default BooksFilter;
