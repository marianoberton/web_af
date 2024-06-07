import '../app/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Eliminar cualquier enlace a hojas de estilo aquí */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
