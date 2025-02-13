import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Image from 'next/image';

const Biografia = () => {
  return (
    <div>
      <Head>
      <title>Biografía de Agustín Forchieri - Diputado y Dirigente de River Plate</title>
      <meta name="description" content="Conoce la biografía de Agustín Forchieri, Diputado de Buenos Aires y miembro de la comisión directiva de River Plate. Descubre su trayectoria política y compromiso con la comunidad." />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5 container mx-auto">
        {/* Sección de biografía detallada */}
        <section className="py-16 bio-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Incrementamos el gap de 8 a 12 */}
            <div className="md:col-span-1 order-1 md:order-2 flex justify-center items-center">
              <Image 
                src="/images/profile_bio.jpg" 
                alt="Diputado Agustín Forchieri" 
                width={400} 
                height={400} 
                className="object-cover w-full shadow-md" 
              />
            </div>
            <div className="md:col-span-2 order-2 md:order-1 lg:pr-8"> {/* Añadimos padding-right en pantallas grandes */}
              <h1 className="text-4xl font-bold mb-8">Biografía de Agustín Forchieri</h1>
              <p className="text-lg mb-4 text-justify">
                Soy Licenciado en Relaciones del Trabajo por la Universidad de Buenos Aires (2004) y realicé una Maestría en Planificación de Ciudades en la FADU - UBA. Socio e hincha de River de toda la vida. Actualmente, soy Prosecretario del <a href="https://www.cariverplate.com.ar/" className="text-blue-500 hover:underline">Club Atlético River Plate</a> y diputado por la provincia de Buenos Aires.
              </p>
              <p className="text-lg mb-4 text-justify">
                En la <a href="https://www.legislatura.gob.ar/legislador/forchieriagust%C3%ADn" className="text-blue-500 hover:underline " target="_blank" rel="noopener noreferrer">Legislatura de la Ciudad de Buenos Aires</a> me desempeñé como Vicepresidente 1° de la cámara y anteriormente fui presidente del bloque “Vamos Juntos” y la comisión de “Planeamiento Urbano”. Durante estos años, me enfoqué en proyectos que promuevan el desarrollo productivo y urbano para beneficio de los vecinos.
              </p>
              <p className="text-lg mb-4 text-justify">
                Durante este período se sancionaron leyes que posibilitaron la creación de la Villa Olímpica, el Parque de la Innovación, la construcción del Paseo y el Parque del Bajo, el Parque de la Estación y también la apertura de calles en el marco de la elevación de los ferrocarriles y de las obras de los viaductos, entre otras.
              </p>
              </div>
          </div>
        </section>

        
        {/* Sección de galería */}
        <section className="py-16 gallery-section">
          <h2 className="text-4xl font-bold mb-8 text-center">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/perfil_alta.jpg" alt="Gallery 1" fill className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
            <div className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/af_y_dirigentes_cancha.jpeg" alt="Gallery 2" fill className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
            <div className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/River/palco_dirigentes.jpg" alt="Gallery 3" fill className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
            <div className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/territorio.jpg" alt="Gallery 4" fill className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
            <div className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/acto_politico.jpg" alt="Gallery 5" fill className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
            <div className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/perfil_legislativo_legiscaba_alta.jpg" alt="Gallery 6" fill className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
          </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default Biografia;
