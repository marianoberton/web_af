import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const articlesDirectory = path.join(process.cwd(), 'content/articulos');
  const filenames = fs.readdirSync(articlesDirectory);

  const articulosData = filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id: filename.replace('.md', ''),
      ...data,
    };
  });

  return {
    props: {
      articulosData,
    },
  };
}

const Articulos = ({ articulosData }) => {
  const [filtro, setFiltro] = useState('Todas');
  const [articulos, setArticulos] = useState(articulosData);

  const filtrarArticulos = (categoria) => {
    setFiltro(categoria);
  };

  const articulosFiltrados = articulos.filter((articulo) => filtro === 'Todas' || articulo.categoria === filtro);

  return (
    <div>
      <Head>
        <title>Noticias y Artículos</title>
        <meta name="description" content="Sección de noticias y artículos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Noticias y Artículos</h1>

        <div className="flex justify-center mb-10">
          <button
            onClick={() => filtrarArticulos('Todas')}
            className={`px-4 py-2 mr-2 ${filtro === 'Todas' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            Todas
          </button>
          <button
            onClick={() => filtrarArticulos('Política')}
            className={`px-4 py-2 mr-2 ${filtro === 'Política' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            Política
          </button>
          <button
            onClick={() => filtrarArticulos('River Plate')}
            className={`px-4 py-2 ${filtro === 'River Plate' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            River Plate
          </button>
        </div>

        <InfiniteScroll
          dataLength={articulosFiltrados.length}
          next={() => fetchMoreData(articulos, setArticulos)}
          hasMore={true}
          loader={<h4 className="text-center">Cargando más artículos...</h4>}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articulosFiltrados.map((articulo) => (
              <div key={articulo.id} className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <img src={articulo.imagen} alt={articulo.titulo} className="object-cover object-center h-full w-full" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{articulo.titulo}</h3>
                <Link href={`/articulo/${articulo.id}`} legacyBehavior>
                  <a className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300 inline-block">Leer más</a>
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
