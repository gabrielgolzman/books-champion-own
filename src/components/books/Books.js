import { memo, useCallback, useState } from "react";

import "./Books.css";

import BooksList from "./BooksList";
import BooksFilter from "./BooksFilter";
import GoalBar from "../goal-bar/GoalBar";
import GoalRead from "../goal-bar/GoalRead";

const Books = memo(({ books }) => {
  console.log("In Books");
  const [yearSelected, setYearSelected] = useState("2021");
  const [maxRead, setMaxRead] = useState(7);

  const onFilterYear = useCallback((year) => {
    setYearSelected(year);
  }, []);

  const onMaxRead = (max) => {
    setMaxRead(max);
  };

  const filteredBooks = books.filter(
    (book) => book.dateRead.getFullYear().toString() === yearSelected
  );

  if (!books.length) return <p>No hay lecturas disponibles</p>;

  return (
    <>
      <div>
        <GoalRead maxRead={maxRead} onMaxRead={onMaxRead} />
        <GoalBar value={filteredBooks.length} maxValue={maxRead} />
        <BooksFilter filterYear={yearSelected} onFilterYear={onFilterYear} />
      </div>
      <div className="books-container books-container-dark">
        <BooksList books={filteredBooks} filterYear={yearSelected} />
      </div>
    </>
  );
});

export default Books;
