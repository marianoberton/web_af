import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const multimediaData = [
  {
    id: 1,
    categoria: 'Política',
    titulo: 'Imagen/Video 1',
    tipo: 'imagen',
    miniatura: '/images/multimedia-1.jpg',
  },
  {
    id: 2,
    categoria: 'River Plate',
    titulo: 'Imagen/Video 2',
    tipo: 'video',
    miniatura: '/images/multimedia-2.jpg',
  },
  // Agrega más multimedia según sea necesario
];

const Galeria = () => {
  const [filtro, setFiltro] = useState('Todas');

  const filtrarMultimedia = (categoria) => {
    setFiltro(categoria);
  };

  const multimediaFiltrada = multimediaData.filter((item) => filtro === 'Todas' || item.categoria === filtro);

  return (
    <div>
      <Head>
        <title>Galería Multimedia</title>
        <meta name="description" content="Galería multimedia del diputado y River Plate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5">
        <h1 className="text-3xl font-bold mb-5">Galería Multimedia</h1>

        <div className="mb-5">
          <button
            onClick={() => filtrarMultimedia('Todas')}
            className={`px-4 py-2 mr-2 ${filtro === 'Todas' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            Todas
          </button>
          <button
            onClick={() => filtrarMultimedia('Política')}
            className={`px-4 py-2 mr-2 ${filtro === 'Política' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            Política
          </button>
          <button
            onClick={() => filtrarMultimedia('River Plate')}
            className={`px-4 py-2 ${filtro === 'River Plate' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            River Plate
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {multimediaFiltrada.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={item.miniatura} alt={item.titulo} className="object-contain object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-bold mt-2">{item.titulo}</h2>
              <Link href={`/multimedia/${item.id}`} legacyBehavior>
                <a className="text-blue-500 mt-4 inline-block">Ver más</a>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Galeria;
