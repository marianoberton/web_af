import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchAPI } from '../../lib/api'; // Asegúrate de que la ruta sea correcta

export async function getStaticProps() {
  try {
    const response = await fetchAPI('/articles?populate=*');
    const articulosData = response.data;

    return {
      props: {
        articulosData: articulosData || [],
      },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articulosData: [],
      },
    };
  }
}

const Articulos = ({ articulosData }) => {
  const [filtro, setFiltro] = useState('Todas');
  const [articulos, setArticulos] = useState(articulosData);

  const filtrarArticulos = (categoria) => {
    setFiltro(categoria);
  };

  const fetchMoreData = async () => {
    // Aquí podrías implementar la lógica para cargar más datos si fuera necesario.
  };

  const articulosFiltrados = Array.isArray(articulos)
    ? articulos.filter((articulo) => filtro === 'Todas' || articulo.attributes.category === filtro)
    : [];

  return (
    <div>
      <Head>
        <title>Artículos</title>
        <meta name="description" content="Sección de noticias y artículos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 mt-6">Artículos</h1>
          <p className="text-xl">Novedades y Artículos de opinión</p>
        </div>
      </div>

      <main className="p-5 container mx-auto">
        <div className="flex justify-center mb-10">
          <button
            onClick={() => filtrarArticulos('Todas')}
            className={`px-4 py-2 mr-2 ${filtro === 'Todas' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            Todas
          </button>
          <button
            onClick={() => filtrarArticulos('Política')}
            className={`px-4 py-2 mr-2 ${filtro === 'Política' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            Política
          </button>
          <button
            onClick={() => filtrarArticulos('River Plate')}
            className={`px-4 py-2 ${filtro === 'River Plate' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            River Plate
          </button>
        </div>

        <InfiniteScroll
          dataLength={articulosFiltrados.length}
          next={fetchMoreData}
          hasMore={false} // Cambia esto si quieres implementar la carga infinita real
          loader={<h4 className="text-center">Cargando más artículos...</h4>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulosFiltrados.map((articulo) => (
              <div key={articulo.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                    {articulo.attributes.image && articulo.attributes.image.data && (
                      <img
                        src={`${process.env.STRAPI_API_URL}${articulo.attributes.image.data.attributes.url}`}
                        alt={articulo.attributes.title}
                        className="object-cover object-center h-full w-full"
                        onError={(e) => { e.target.onerror = null; e.target.src = "/path-to-default-image.jpg"; }}
                        onLoad={(e) => { console.log("Image URL:", e.target.src); }}

                      />
                    )}
                  </div>
                  <Link href={`/articulo/${articulo.id}`} legacyBehavior>
                    <a className="text-xl font-semibold mb-2 hover:underline">{articulo.attributes.title}</a>
                  </Link>
                  <p className="text-gray-700 mb-4">{articulo.attributes.summary.substring(0, 100)}...</p>
                </div>
                <Link href={`/articulo/${articulo.id}`} legacyBehavior>
                  <a className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 inline-block mt-auto">Leer más</a>
                </Link>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </main>

      <Footer />
    </div>
  );
};

export default Articulos;
