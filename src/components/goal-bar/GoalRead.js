import './GoalRead.css';

const GoalRead = ({ maxRead, onMaxRead }) => {
   const onMaxChanged = (event) => {
      onMaxRead(event.target.value);
   };

   return (
      <form>
         <label>Registrar nuevo objetivo de lectura</label>
         <input
            className="new-max-read-control"
            onChange={onMaxChanged}
            type="number"
            step="1"
            value={maxRead}
         />
      </form>
   );
};

export default GoalRead;
