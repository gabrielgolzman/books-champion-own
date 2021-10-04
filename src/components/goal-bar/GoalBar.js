import './GoalBar.css';

const GoalBar = ({ value, maxValue }) => {
   let barFillHeight = '0%';

   if (maxValue > 0) {
      barFillHeight = Math.round((value / maxValue) * 100) + '%';
      console.log(barFillHeight);
   }

   return (
      <div className="chart-bar">
         <div className="chart-bar__inner">
            <div
               className="chart-bar__fill"
               style={{ width: barFillHeight }}
            ></div>
         </div>
         <div className="chart-bar__label">Libros leidos</div>
      </div>
   );
};

export default GoalBar;
