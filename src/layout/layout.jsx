import { React, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/navHome';
import Footer from '../components/footer';

export default function Layout({ page, children}) {
  return (
    <>
      <Head>
        <title>{page}</title>
        <meta name="description" content="Website NextJs Basic" />
      </Head>

      <div>
        <Header page={page} />
        <main>
            {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
