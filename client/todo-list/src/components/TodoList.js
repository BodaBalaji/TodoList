import React from 'react';
import TodoItem from './TodoItem';
import styles from "../styles/styles.css"

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;


