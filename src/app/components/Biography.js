import Link from 'next/link';
import Image from 'next/image';

const Biography = () => {
  return (
    <section className="p-10 bg-gray-100 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-5 md:mb-0">
        <Image
          src="/images/profile_bio.jpg"
          alt="Agustín Forchieri - Diputado de Buenos Aires y Dirigente de River Plate"
          width={256}
          height={256}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-10">
        <h2 className="text-4xl font-bold mb-5 text-center md:text-left">Breve Biografía</h2>
        <p className="mb-4 text-lg leading-relaxed text-justify">
          Soy Licenciado en Relaciones del Trabajo por la Universidad de Buenos Aires (2004) y
          realicé una Maestría en Planificación de Ciudades en la FADU - UBA. Socio e hincha de
          River de toda la vida. Actualmente, presido el bloque PRO en la Legislatura de la Provincia
          de Buenos Aires y me desempeño como Prosecretario del Club Atlético River Plate.
        </p>
        <div className="text-center md:text-left">
          <Link href="/biografia" legacyBehavior>
            <a className="text-blue-800 font-bold text-lg">Leer biografía completa</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Biography;
