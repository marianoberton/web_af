import Link from 'next/link';

const Biography = () => {
  return (
    <section className="p-10 bg-gray-100 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          src="\images\hero-background11.jpg" // Ruta de la imagen
          alt="Agustin Forchieri en un evento comunitario"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-10">
        <h2 className="text-4xl font-bold mb-5 text-center md:text-left">Breve Biografía</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Agustin Forchieri es un destacado diputado comprometido con la comunidad y ferviente seguidor de River Plate. Su carrera política se ha centrado en la mejora de las condiciones de vida de los ciudadanos y el fortalecimiento de las instituciones democráticas. Además, su pasión por el fútbol lo ha llevado a desempeñar un papel crucial en la dirigencia de River Plate, promoviendo valores de trabajo en equipo y excelencia deportiva.
        </p>
    
        <div className="text-center md:text-left">
          <Link href="/biografia" legacyBehavior>
            <a className="text-yellow-500 font-bold text-lg">Leer biografía completa</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Biography;
