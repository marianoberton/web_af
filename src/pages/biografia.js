import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

const Biografia = () => {
  return (
    <div>
      <Head>
        <title>Biografía de Agustín Forchieri</title>
        <meta name="description" content="Biografía del diputado Agustín Forchieri, miembro de la comisión directiva de River Plate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5 container mx-auto">
        {/* Sección de biografía detallada */}
        <section className="py-16 bio-section">
          <h2 className="text-4xl font-bold mb-8 text-center">Biografía</h2>
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-1/3">
              <img src="/images/hero-background11.jpg" alt="Diputado Agustín Forchieri" className="object-cover h-64 w-full rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3 md:pl-8 mt-5 md:mt-0">
              <p className="text-lg mb-4">
                Agustín Forchieri es un destacado diputado comprometido con la comunidad y el desarrollo del país. A lo largo de su carrera, ha trabajado incansablemente para mejorar la vida de sus conciudadanos a través de diversas iniciativas legislativas y proyectos comunitarios. Su dedicación y pasión por el servicio público son evidentes en cada uno de sus logros.
              </p>
              <p className="text-lg">
                Desde sus inicios en la política, Forchieri ha demostrado ser un líder visionario con una fuerte ética de trabajo y una profunda conexión con la gente. Sus esfuerzos se han centrado en áreas clave como la educación, la salud, la infraestructura y el desarrollo económico.
              </p>
            </div>
          </div>
        </section>

        {/* Línea de tiempo avanzada */}
        <section className="py-16 bg-gray-100 timeline-section">
          <h2 className="text-4xl font-bold mb-8 text-center">Línea de Tiempo</h2>
          <div className="relative timeline-container">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="timeline-line"></div>
            </div>
            <div className="relative z-10 space-y-8 timeline-items">
              <div className="flex flex-col md:flex-row justify-between items-center w-full timeline-item">
                <div className="flex-1 flex justify-end pr-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80">
                    <h3 className="text-xl font-semibold">Vicepresidente Primero de la Legislatura Porteña</h3>
                    <img src="/images/event1.jpg" alt="Evento 1" className="w-full h-32 object-cover rounded-lg mb-2" />
                    <p className="text-sm">Durante su mandato como Vicepresidente Primero de la Legislatura Porteña, Agustín Forchieri presentó una gran cantidad de proyectos destinados a mejorar la calidad de vida de los ciudadanos de Buenos Aires. Su liderazgo y visión han sido cruciales en la implementación de políticas públicas efectivas.</p>
                  </div>
                </div>
                <div className="timeline-point"></div>
                <div className="flex-1"></div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center w-full timeline-item">
                <div className="flex-1"></div>
                <div className="timeline-point"></div>
                <div className="flex-1 flex justify-start pl-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80">
                    <h3 className="text-xl font-semibold">Prosecretario de River Plate</h3>
                    <img src="/images/event2.jpg" alt="Evento 2" className="w-full h-32 object-cover rounded-lg mb-2" />
                    <p className="text-sm">Desde el año 2015, Agustín Forchieri ha desempeñado el cargo de Prosecretario de River Plate. En esta posición, ha trabajado para fortalecer la institución y promover el desarrollo del deporte, apoyando tanto a los jugadores como a la comunidad de hinchas.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center w-full timeline-item">
                <div className="flex-1 flex justify-end pr-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80">
                    <h3 className="text-xl font-semibold">Jefe del Bloque PRO de la Legislatura Bonaerense</h3>
                    <img src="/images/event3.jpg" alt="Evento 3" className="w-full h-32 object-cover rounded-lg mb-2" />
                    <p className="text-sm">Como Jefe del Bloque PRO de la Legislatura Bonaerense, Agustín Forchieri ha liderado la bancada en la presentación y defensa de proyectos legislativos que buscan el bienestar de los ciudadanos de la provincia de Buenos Aires. Su liderazgo ha sido fundamental en la coordinación y ejecución de políticas públicas clave.</p>
                  </div>
                </div>
                <div className="timeline-point"></div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de galería */}
        <section className="py-16 gallery-section">
          <h2 className="text-4xl font-bold mb-8 text-center">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="/images/gallery1.jpg" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/images/gallery2.jpg" alt="Gallery 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/images/gallery3.jpg" alt="Gallery 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/images/gallery4.jpg" alt="Gallery 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/images/gallery5.jpg" alt="Gallery 5" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/images/gallery6.jpg" alt="Gallery 6" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Biografia;
