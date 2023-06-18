import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/navHome';
import Footer from '../components/footer';

export default function Layout({ page, children, lengthChange }) {
  const [itemsLength, setItemsLength] = useState(0);
  useEffect(() => {
    const updateItemsLength = () => {
      const orderItems = JSON.parse(window.localStorage.getItem('order')) || [];
      setItemsLength(orderItems.length);
    };

    updateItemsLength(); // Call the function once on initial render

    const handleStorageChange = () => {
      updateItemsLength(); // Call the function whenever 'order' data in localStorage changes
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [lengthChange]);
  return (
    <>
      <Head>
        <title>{page}</title>
        <meta name="description" content="Website Next.js Basic" />
      </Head>

      <div>
        <Header page={page} length={itemsLength} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
