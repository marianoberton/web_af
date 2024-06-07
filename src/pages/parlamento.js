import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';

const proyectosData = [
  {
    id: 1,
    titulo: 'Proyecto 1',
    descripcion: 'Descripción del proyecto 1...',
    estado: 'Aprobado',
  },
  {
    id: 2,
    titulo: 'Proyecto 2',
    descripcion: 'Descripción del proyecto 2...',
    estado: 'En proceso',
  },
  // Agrega más proyectos según sea necesario
];

const Proyectos = () => {
  return (
    <div>
      <Head>
        <title>Proyectos Presentados</title>
        <meta name="description" content="Proyectos presentados por el diputado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5">
        <h1 className="text-3xl font-bold mb-5">Proyectos Presentados</h1>
        <div>
          {proyectosData.map((proyecto) => (
            <div key={proyecto.id} className="bg-white p-4 rounded shadow mb-4">
              <h2 className="text-xl font-bold">{proyecto.titulo}</h2>
              <p>{proyecto.descripcion}</p>
              <p><strong>Estado:</strong> {proyecto.estado}</p>
              <Link href={`/proyecto/${proyecto.id}`} legacyBehavior>
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

export default Proyectos;
