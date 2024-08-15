import '../app/globals.css';
import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
