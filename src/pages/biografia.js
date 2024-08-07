import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Image from 'next/image';

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 order-1 md:order-2 flex justify-center items-center">
              <Image src="/images/profile_bio.jpg" alt="Diputado Agustín Forchieri" width={400} height={400} className="object-cover w-full shadow-md" />
            </div>
            <div className="md:col-span-2 order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-8">Biografía</h2>
              <p className="text-lg mb-4">
                Soy Licenciado en Relaciones del Trabajo por la Universidad de Buenos Aires (2004) y realicé una Maestría en Planificación de Ciudades en la FADU - UBA. Socio e hincha de River de toda la vida. Actualmente, presido el bloque PRO en la Legislatura de la Provincia de Buenos Aires y me desempeño como Prosecretario del <a href="https://www.cariverplate.com.ar/" className="text-blue-500 hover:underline">Club Atlético River Plate</a>.
              </p>
              <p className="text-lg mb-4">
                Mi trayectoria como legislador incluyó roles de liderazgo dentro de la <a href="https://www.legislatura.gob.ar/legislador/forchieriagust%C3%ADn" className="text-blue-500 hover:underline">Legislatura de la Ciudad de Buenos Aires</a>. Allí me desempeñé como Vicepresidente 1° de la cámara y anteriormente fui presidente del bloque “Vamos Juntos” y la comisión de “Planeamiento Urbano”. Durante estos años, me enfoqué en proyectos que promuevan el desarrollo productivo y urbano para beneficio de los vecinos. En todo ese recorrido, siempre consideré fundamental escuchar las necesidades de los vecinos para, juntos, encontrar las soluciones.
              </p>
              <p className="text-lg mb-4">
                Durante este período se sancionaron leyes que posibilitaron la creación de la Villa Olímpica, el Parque de la Innovación, la construcción del Paseo y el Parque del Bajo, el Parque de la Estación y también la apertura de calles en el marco de la elevación de los ferrocarriles y de las obras de los viaductos, entre otras.
              </p>
              <p className="text-lg">
                Además de mi trabajo legislativo, anteriormente he tenido el privilegio de colaborar en distintos ámbitos profesionales, siempre con el objetivo de aportar mi experiencia para que los proyectos avancen y se concreten.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de galería */}
        <section className="py-16 gallery-section">
          <h2 className="text-4xl font-bold mb-8 text-center">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Image src="/images/perfil_alta.jpg" alt="Gallery 1" width={300} height={300} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <Image src="/images/af_y_dirigentes_cancha.jpeg" alt="Gallery 2" width={300} height={300} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <Image src="/images/River/palco_dirigentes.jpg" alt="Gallery 3" width={300} height={300} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <Image src="/images/territorio.jpg" alt="Gallery 4" width={300} height={300} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <Image src="/images/acto_politico.jpg" alt="Gallery 5" width={300} height={300} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <Image src="/images/perfil_legislativo_legiscaba_alta.jpg" alt="Gallery 6" width={300} height={300} className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Biografia;
