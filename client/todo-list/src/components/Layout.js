import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className='c1'>
      <Head className="c2">
        <title>Todo List </title>
      </Head>
      <header>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;