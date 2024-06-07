import Link from 'next/link';
import { FaFileAlt, FaFileSignature, FaHandHoldingUsd } from 'react-icons/fa'; // Importación de iconos

const FeaturedProjects = () => {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Gestión Parlamentaria</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Proyecto 1 */}
        <div className="p-5 bg-gray-100 rounded-lg shadow-lg text-center">
          <FaFileSignature className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Boleta Única de Papel</h3>
          <p className="text-lg mb-4">Implementación de un sistema de votación más transparente y accesible a través de la boleta única de papel.</p>
          <div className="flex justify-center">
            <Link href="/proyecto-boleta-unica" legacyBehavior>
              <a className="text-yellow-500 font-bold text-lg">Ver detalles del proyecto</a>
            </Link>
          </div>
        </div>
        {/* Proyecto 2 */}
        <div className="p-5 bg-gray-100 rounded-lg shadow-lg text-center">
          <FaHandHoldingUsd className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Exención de Impuestos para Damnificados</h3>
          <p className="text-lg mb-4">Establecimiento de la exención de impuestos para los contribuyentes de 9 de Julio afectados por el temporal del 19 de marzo.</p>
          <div className="flex justify-center">
            <Link href="/proyecto-exencion-impuestos" legacyBehavior>
              <a className="text-yellow-500 font-bold text-lg">Ver detalles del proyecto</a>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="text-3xl font-semibold my-10 text-center">Sesiones</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Video 1 */}
        <div className="p-5 bg-yellow-500 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Sesión Extraordinaria 20-02</h3>
          <div className="relative h-64 w-full overflow-hidden rounded-lg mb-4">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/4E4vSVUbWHQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Discurso de Agustin en el Parlamento"
            ></iframe>
          </div>
        </div>
        {/* Video 2 */}
        <div className="p-5 bg-yellow-500 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Sesión Extraordinaria 21-02</h3>
          <div className="relative h-64 w-full overflow-hidden rounded-lg mb-4">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/EbTZ34-mRU4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Discurso de Agustin en el Parlamento"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/proyectos" legacyBehavior>
          <a className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300 text-lg font-bold">Ver todos los proyectos</a>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
