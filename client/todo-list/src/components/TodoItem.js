import React, {useState} from 'react';
import styles from "../styles/styles.css"

const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(
    localStorage.getItem(`todo-${todo._id}-isCompleted`) === 'true' ? true : false
  );

  const handleUpdate = () => {
    setIsCompleted(true);
    localStorage.setItem(`todo-${todo._id}-isCompleted`, true);
  };

  const handleDelete = () => {
    onDelete(todo._id);
  };

   return (
    <div className="todo-item">
      <h3 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {todo.title}
      </h3>
      <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {todo.description}
      </p>
      {/* <p>Created: {todo.date.toLocaleDateString()}</p> */}
      <button onClick={() => onDelete(todo._id)} style={{ backgroundColor: "red", marginRight: "10px", padding: "5px", borderRadius: "10px" }}>
        Delete
      </button>
      <button onClick={handleUpdate} style={{ backgroundColor: "orange", marginRight: "20px", padding: "5px", borderRadius: "10px" }}>
        Completed
      </button>
    </div>
  );
};

export default TodoItem;

