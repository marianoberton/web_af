import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';

const noticiasData = [
  {
    id: 1,
    titulo: 'Noticia de River Plate 1',
    resumen: 'Resumen de la noticia de River Plate 1...',
    imagen: '/images/river-news-1.jpg',
  },
  {
    id: 2,
    titulo: 'Noticia de River Plate 2',
    resumen: 'Resumen de la noticia de River Plate 2...',
    imagen: '/images/river-news-2.jpg',
  },
  // Agrega más noticias según sea necesario
];

const galeriasData = [
  {
    id: 1,
    titulo: 'Galería 1',
    imagen: '/images/river-gallery-1.jpg',
  },
  {
    id: 2,
    titulo: 'Galería 2',
    imagen: '/images/river-gallery-2.jpg',
  },
  // Agrega más galerías según sea necesario
];

const videosData = [
  {
    id: 1,
    titulo: 'Video 1',
    imagen: '/images/river-video-1.jpg',
  },
  {
    id: 2,
    titulo: 'Video 2',
    imagen: '/images/river-video-2.jpg',
  },
  // Agrega más videos según sea necesario
];

const RiverPlate = () => {
  return (
    <div>
      <Head>
        <title>River Plate</title>
        <meta name="description" content="Noticias y eventos del club River Plate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5">
        <h1 className="text-3xl font-bold mb-5">River Plate</h1>

        <h2 className="text-2xl font-bold mb-3">Noticias y Eventos del Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {noticiasData.map((noticia) => (
            <div key={noticia.id} className="bg-white p-4 rounded shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={noticia.imagen} alt={noticia.titulo} className="object-contain object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-bold mt-2">{noticia.titulo}</h2>
              <p className="mt-2">{noticia.resumen}</p>
              <Link href={`/noticia/${noticia.id}`} legacyBehavior>
                <a className="text-blue-500 mt-4 inline-block">Leer más</a>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-3">Galerías de Fotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {galeriasData.map((galeria) => (
            <div key={galeria.id} className="bg-white p-4 rounded shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={galeria.imagen} alt={galeria.titulo} className="object-contain object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-bold mt-2">{galeria.titulo}</h2>
              <Link href={`/galeria/${galeria.id}`} legacyBehavior>
                <a className="text-blue-500 mt-4 inline-block">Ver más</a>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-3">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videosData.map((video) => (
            <div key={video.id} className="bg-white p-4 rounded shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={video.imagen} alt={video.titulo} className="object-contain object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-bold mt-2">{video.titulo}</h2>
              <Link href={`/video/${video.id}`} legacyBehavior>
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

export default RiverPlate;
