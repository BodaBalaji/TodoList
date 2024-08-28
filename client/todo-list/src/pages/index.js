import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import axios from 'axios';
import styles from "../styles/styles.css"

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3030/getall')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3030/delete/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      setTodos(todos.filter(todo => todo._id !== id));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleCreate = async (todo) => {
    await axios.post('http://localhost:3030/add', todo);
    setTodos([...todos, todo]);
  };

  return (
    <Layout>
      <h1>Todo List App</h1>
      <TodoList todos={todos} onDelete={handleDelete} />
      <button onClick={() => setShowForm(true)}>Create Todo</button>
      {showForm && (
        <div className="add-todo-form">
          <AddTodo onCreate={handleCreate} />
        </div>
      )}
    </Layout>
  );
};

export default Index;

