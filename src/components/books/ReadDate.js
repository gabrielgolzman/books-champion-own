import { memo } from "react";
import "./ReadDate.css";

const ReadDate = ({ date }) => {
  console.log("In ReadDate");
  const year = date.getFullYear();
  const month = date.toLocaleString("es-AR", { month: "long" });
  const day = date.getUTCDate();
  return (
    <div className="date-container">
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default ReadDate;
