import Link from 'next/link';
import Image from 'next/image';

const Medios = () => {
  return (
    <section className="p-4 md:p-10 bg-white w-full">
      <h2 className="text-4xl font-bold mb-10 text-center">Medios</h2>
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg w-full">
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <Image src="/images/news-1.jpg" alt="Noticia 1" layout="fill" className="object-cover object-center" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Legislatura: aunque no entró el proyecto, la oposición ya se plantó al RIGI de Kicillof</h3>
          <Link href="https://infocielo.com/politica-y-economia/legislatura-aunque-no-entro-el-proyecto-la-oposicion-ya-se-planto-al-rigi-kicillof-n789413" legacyBehavior>
            <a className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 inline-block">Leer más</a>
          </Link>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg w-full">
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <Image src="/images/news-4.jpg" alt="Noticia 2" layout="fill" className="object-cover object-center" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Agustín Forchieri: “Que Kicillof adhiera primero al RIGI nacional y después debatimos su proyecto”</h3>
          <Link href="https://provincianoticias.com.ar/nota/15802/agustin-forchieri-que-kicillof-adhiera-primero-al-rigi-nacional-y-despues-debatimos-su-proyecto/" legacyBehavior>
            <a className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 inline-block">Leer más</a>
          </Link>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg w-full">
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <Image src="/images/news-3.jpg" alt="Noticia 3" layout="fill" className="object-cover object-center" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Buenos Aires: el PRO apura a Axel Kicillof para que firme el Pacto de Mayo y discuta la coparticipación</h3>
          <Link href="https://www.letrap.com.ar/politica/buenos-aires-el-pro-apura-axel-kicillof-que-firme-el-pacto-mayo-y-discuta-la-coparticipacion-n5406943" legacyBehavior>
            <a className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 inline-block">Leer más</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Medios;
