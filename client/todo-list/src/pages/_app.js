import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Todo List </title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;