import Link from 'next/link';
import { FaFileSignature, FaFileAlt, FaScroll, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const proyectosData = [
  {
    id: 1,
    titulo: 'Boleta Única de Papel',
    descripcion: 'El proyecto de Boleta Única de Papel busca equidad y eficiencia electoral en Buenos Aires',
    imagen: '/images/boleta-unica.jpg',
  },
  {
    id: 2,
    titulo: 'Adhesión al RIGI',
    descripcion: 'La Provincia de Buenos Aires debe adherirse al Régimen de Incentivos a Grandes Inversiones (RIG) y desde el bloque PRO propusimos un proyecto de ley para avanzar en ese sentido. Queremos una Provincia productiva, con desarrollo y oportunidades',
    imagen: '/images/gnl3.jpg',
  }
];

const FeaturedProjects = () => {
  return (
    <section className="p-10 bg-white max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Gestión Legislativa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {proyectosData.map((proyecto) => (
          <div key={proyecto.id} className="p-5 bg-gray-100 rounded-lg shadow-lg text-center">
            <FaFileAlt className="text-6xl text-blue-800 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{proyecto.titulo}</h3>
            <p className="text-lg mb-4">{proyecto.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/parlamento" legacyBehavior>
          <a className="px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 text-lg font-bold">Ver todos los proyectos</a>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
