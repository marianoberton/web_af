import Link from 'next/link';

const Medios = () => {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Medios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <img src="/images/news-1.jpg" alt="Noticia 1" className="object-cover object-center h-full w-full" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Diputados bonaerenses quieren aumentar las indemnizaciones por despido para rivalizar con la reforma laboral de Milei</h3>
          <Link href="https://www.infobae.com/politica/2024/05/30/diputados-bonaerenses-quieren-aumentar-las-indemnizaciones-por-despido-para-rivalizar-con-la-reforma-laboral-de-milei/" legacyBehavior>
            <a className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300 inline-block">Leer más</a>
          </Link>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <img src="/images/news-2.jpg" alt="Noticia 2" className="object-cover object-center h-full w-full" />
          </div>
          <h3 className="text-xl font-semibold mb-4">El diputado Forchieri pidió al titular de ARBA que restituya los beneficios para contribuyentes cumplidores</h3>
          <Link href="https://www.novabonaerense.com/nota.asp?n=2024_5_23&id=45284&id_tiponota=4" legacyBehavior>
            <a className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300 inline-block">Leer más</a>
          </Link>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <img src="/images/news-3.jpg" alt="Noticia 3" className="object-cover object-center h-full w-full" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Buenos Aires: el PRO apura a Axel Kicillof para que firme el Pacto de Mayo y discuta la coparticipación</h3>
          <Link href="https://www.letrap.com.ar/politica/buenos-aires-el-pro-apura-axel-kicillof-que-firme-el-pacto-mayo-y-discuta-la-coparticipacion-n5406943" legacyBehavior>
            <a className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300 inline-block">Leer más</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Medios;
