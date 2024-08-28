import React from 'react';
import Layout from '../components/Layout';
import UpdateTodo from '../components/UpdateTodo';

const Update = ({ id }) => {
  return (
    <Layout>
      <h1>Update Todo</h1>
      <UpdateTodo id={id} />
    </Layout>
  );
};

export default Update;