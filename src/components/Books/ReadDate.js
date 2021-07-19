import './ReadDate.css';

const ReadDate = ({ date }) => {
   const month = date.toLocaleString('es-AR', { month: 'long' });
   const year = date.getFullYear();
   const day = date.toLocaleString('es-AR', { day: '2-digit' });

   return (
      <div className="read-date">
         <div className="read-date-month">{month}</div>
         <div className="read-date-year">{year}</div>
         <div className="read-date-day">{day}</div>
      </div>
   );
};

export default ReadDate;
