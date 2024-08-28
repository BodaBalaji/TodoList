import React from 'react';
import Layout from '../components/Layout';
import AddTodo from '../components/AddTodo';

const Add = () => {
  return (
    <Layout>
      <h1>Add Todo</h1>
      <AddTodo />
    </Layout>
  );
};

export default Add;