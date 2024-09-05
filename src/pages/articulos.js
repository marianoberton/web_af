import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { fetchAPI } from '../../lib/api';

export async function getStaticProps() {
  try {
    const [articulosResponse, noticiasResponse] = await Promise.all([
      fetchAPI('/articles?populate=*'), // Artículos redactados
      fetchAPI('/noticias?populate=*'),     // Noticias externas
    ]);

    return {
      props: {
        articulosData: articulosResponse.data || [],
        noticiasData: noticiasResponse.data || [], // Incluimos las noticias
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Error fetching articles or news:', error);
    return {
      props: {
        articulosData: [],
        noticiasData: [], // En caso de error, devolvemos array vacío
      },
    };
  }
}

const Articulos = ({ articulosData, noticiasData }) => {
  const [filtro, setFiltro] = useState('Todas');
  const [articulos, setArticulos] = useState(articulosData);
  const [noticias, setNoticias] = useState(noticiasData);
  const [itemsToShow, setItemsToShow] = useState(6); // Mostrar 2 filas (3 por fila)

  const filtrarArticulos = (categoria) => {
    setFiltro(categoria);
  };

  const loadMore = () => {
    setItemsToShow((prevItems) => prevItems + 6); // Cargar 2 filas adicionales
  };

  const contenidoFiltrado = () => {
    const articulosFiltrados = articulos.filter(
      (articulo) => filtro === 'Todas' || articulo.attributes.category === filtro
    );
    const noticiasFiltradas = noticias.filter(
      (noticia) => filtro === 'Todas' || noticia.attributes.category === filtro
    );

    const combinedContent = [...articulosFiltrados, ...noticiasFiltradas];
    return combinedContent
      .sort(
        (a, b) =>
          new Date(b.attributes.fecha_de_publicacion) -
          new Date(a.attributes.fecha_de_publicacion)
      )
      .slice(0, itemsToShow); // Limitar los items que se muestran
  };

  return (
    <div>
      <Head>
        <title>Artículos y Noticias</title>
        <meta name="description" content="Sección de noticias y artículos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2 mt-8">Artículos y Noticias</h1>
          <p className="text-xl mb-0">Novedades y Artículos de opinión</p>
        </div>
      </div>

      <main className="p-5 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contenidoFiltrado().map((contenido) => (
            <div key={contenido.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <div className="relative w-full pb-[56.25%] mb-4">
                  {contenido.attributes.image?.data?.[0]?.attributes?.url ||
                  contenido.attributes.image?.data?.attributes?.url ? (
                    <Image
                      src={
                        contenido.attributes.image.data[0]?.attributes?.url ||
                        contenido.attributes.image.data?.attributes?.url
                      }
                      alt={contenido.attributes.title}
                      fill
                      className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <p>Imagen no disponible</p>
                  )}
                </div>
                {contenido.attributes.link ? (
                  <Link href={contenido.attributes.link} legacyBehavior>
                    <a className="text-xl font-semibold mb-2 hover:underline">
                      {contenido.attributes.title}
                    </a>
                  </Link>
                ) : (
                  <Link href={`/articulo/${contenido.id}`} legacyBehavior>
                    <a className="text-xl font-semibold mb-2 hover:underline">
                      {contenido.attributes.title}
                    </a>
                  </Link>
                )}
                <p className="text-gray-700 mb-4">
                  {contenido.attributes.description ||
                  contenido.attributes.summary
                    ? `${contenido.attributes.description?.substring(0, 100) ||
                        contenido.attributes.summary?.substring(0, 100)}...`
                    : 'Sin descripción disponible'}
                </p>
              </div>
              {contenido.attributes.link ? (
                <Link href={contenido.attributes.link} legacyBehavior>
                  <a
                    className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 inline-block mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leer más
                  </a>
                </Link>
              ) : (
                <Link href={`/articulo/${contenido.id}`} legacyBehavior>
                  <a className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 inline-block mt-auto">
                    Leer más
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>

        {contenidoFiltrado().length < articulos.length + noticias.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300"
            >
              Ver más
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Articulos;
