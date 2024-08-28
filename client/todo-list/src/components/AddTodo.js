import React, { useState } from 'react';
import styles from "../styles/styles.css"

const AddTodo = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const todo = { title, description };
    onCreate(todo);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-todo1">
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;























