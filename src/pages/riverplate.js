import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const River = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>River - Agustín Forchieri</title>
        <meta name="description" content="La relación de Agustín Forchieri con River, su historia y su compromiso con el club." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero section with video background */}
      <section className="relative h-[70vh] bg-cover bg-center">
        {isMobile ? (
          <img
            src="/images/river/IMG_7550_copia.jpg"
            alt="River Plate"
            className="absolute w-full h-full object-cover"
          />
        ) : (
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src="/videos/river_hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto flex items-center h-full text-white p-5">
          <div className="w-full md:max-w-lg text-right ml-auto md:flex md:flex-col md:items-end">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Ri<span className="text-red-600">v</span>er Pl<span className="text-red-600">a</span>te
            </h1>
            <p className="mt-4 text-xl md:text-2xl">La pasión por el más grande</p>
          </div>
        </div>
      </section>

      <main className="p-5 container mx-auto">
        {/* Sección de River Plate */}
        <section className="py-16 river-section">
          <div className="hidden md:grid md:grid-cols-3 gap-12 mb-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">River</h2>
              <p className="text-lg leading-relaxed">
                Mi vida está atravesada por River. En la infancia, me acuerdo cómo contaba los días para que llegue el domingo para ir con mi familia al Monumental. Ir en el auto escuchando la previa, pensar cómo se iba a parar el equipo. Llegar a la cancha y empezar a subir las escaleras internas, hasta que por fin, veíamos el pasto, la gente. Miles y miles de personas en un mismo lugar, con el mismo objetivo: Compartir la pasión y alentar al más grande.<br /><br />
                Después vino la adolescencia y la juventud, los viajes para ver a River con los amigos que el club me dio y abrazarme con desconocidos en un grito de gol. Esperaba que publicaran el fixture para empezar a planificar con mis amigos a dónde y cómo iríamos. La única certeza que teníamos, era que queríamos estar. Hoy cambiaron muchas cosas en mi vida menos la pasión por River. Cumplí el sueño de formar mi familia, ser yo quien los lleve a la cancha y les regale su primera camiseta. A su vez, tuve el gran honor de representar al club como Asambleísta, Secretario de la Asamblea y Prosecretario, cargo que ocupo actualmente.<br /><br />
                Para mí, ser dirigente de River es mucho más que un título: es una misión y una responsabilidad enorme. Defender nuestros colores, nuestra historia y nuestra identidad es algo que llevo con orgullo y dedicación. Es impresionante ver el compromiso de los hinchas y empleados del club, trabajando juntos para que River siga siendo el más grande de la Argentina. Todos los que llevamos a River en el corazón tenemos la responsabilidad de seguir este legado, para que la grandeza que nos define hoy siga viva en nuestros hijos y en los hijos de ellos.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <img src="/images/River/estadio2.jpeg" alt="River Plate 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
              <img src="/images/River/af_y_dirigentes_cancha.jpeg" alt="River Plate 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="md:hidden">
            <h2 className="text-4xl font-bold mb-4">River</h2>
            <p className="text-lg leading-relaxed mb-4">
              Mi vida está atravesada por River. En la infancia, me acuerdo cómo contaba los días para que llegue el domingo para ir con mi familia al Monumental. Ir en el auto escuchando la previa, pensar cómo se iba a parar el equipo. Llegar a la cancha y empezar a subir las escaleras internas, hasta que por fin, veíamos el pasto, la gente. Miles y miles de personas en un mismo lugar, con el mismo objetivo: Compartir la pasión y alentar al más grande.
            </p>
            <img src="/images/River/estadio2.jpeg" alt="River Plate 1" className="w-full h-full object-cover rounded-lg shadow-lg mb-4" />
            <p className="text-lg leading-relaxed mb-4">
              Después vino la adolescencia y la juventud, los viajes para ver a River con los amigos que el club me dio y abrazarme con desconocidos en un grito de gol. Esperaba que publicaran el fixture para empezar a planificar con mis amigos a dónde y cómo iríamos. La única certeza que teníamos, era que queríamos estar. Hoy cambiaron muchas cosas en mi vida menos la pasión por River. Cumplí el sueño de formar mi familia, ser yo quien los lleve a la cancha y les regale su primera camiseta. A su vez, tuve el gran honor de representar al club como Asambleísta, Secretario de la Asamblea y Prosecretario, cargo que ocupo actualmente.
            </p>
            <img src="/images/River/af_y_dirigentes_cancha.jpeg" alt="River Plate 2" className="w-full h-full object-cover rounded-lg shadow-lg mb-4" />
            <p className="text-lg leading-relaxed">
              Para mí, ser dirigente de River es mucho más que un título: es una misión y una responsabilidad enorme. Defender nuestros colores, nuestra historia y nuestra identidad es algo que llevo con orgullo y dedicación. Es impresionante ver el compromiso de los hinchas y empleados del club, trabajando juntos para que River siga siendo el más grande de la Argentina. Todos los que llevamos a River en el corazón tenemos la responsabilidad de seguir este legado, para que la grandeza que nos define hoy siga viva en nuestros hijos y en los hijos de ellos.
            </p>
          </div>
        </section>

       

        {/* Sección de Agrupación Nuevos Dirigentes */}
        <section className="py-16 bg-gray-200 text-gray-800 text-center relative overflow-hidden">
          <div className="flex justify-center items-center mb-8">
            <img src="/images/River/logo_nd.png" alt="Logo Nuevos Dirigentes" className="w-24 h-24 mr-4" />
            <h2 className="text-3xl font-bold">Agrupación Nuevos Dirigentes</h2>
          </div>
          <p className="text-lg mb-8">Seguinos en nuestras redes sociales</p>
          <div className="flex justify-center space-x-4">
            <a href="https://x.com/nd_riverplate" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-8 w-8 text-gray-800 hover:text-yellow-600" />
            </a>
            <a href="https://www.instagram.com/nd_riverplate/?hl=es" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-8 w-8 text-gray-800 hover:text-yellow-600" />
            </a>
          </div>
        </section>

       {/* Videos y Tweets */}
        <section className="py-16 bg-gray-100 agrupacion-section relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 ml-4">Instagram</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-w-16 aspect-h-9">
                    <video className="w-full h-full rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300" controls muted>
                      <source src="/videos/nd1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="aspect-w-16 aspect-h-9">
                    <video className="w-full h-full rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300" controls muted>
                      <source src="/videos/nd2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="aspect-w-16 aspect-h-9">
                    <video className="w-full h-full rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300" controls muted>
                      <source src="/videos/nd3.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="aspect-w-16 aspect-h-9">
                    <video className="w-full h-full rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300" controls muted>
                      <source src="/videos/nd4.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Últimos Tweets</h3>
                <div className="space-y-4">
                  <blockquote className="twitter-tweet">
                    <p lang="es" dir="ltr"><a href="https://twitter.com/nd_riverplate/status/1714220029510652204">https://twitter.com/nd_riverplate/status/1714220029510652204</a></p>&mdash; nd_riverplate (@nd_riverplate) <a href="https://twitter.com/nd_riverplate/status/1714220029510652204?ref_src=twsrc%5Etfw">Oct 17, 2023</a></blockquote>
                  <blockquote className="twitter-tweet">
                    <p lang="es" dir="ltr"><a href="https://twitter.com/nd_riverplate/status/21">https://twitter.com/nd_riverplate/status/21</a></p>&mdash; nd_riverplate (@nd_riverplate) <a href="https://twitter.com/nd_riverplate/status/1812703446614614112?ref_src=twsrc%5Etfw">Oct 18, 2023</a></blockquote>
                  <blockquote className="twitter-tweet">
                    <p lang="es" dir="ltr"><a href="https://twitter.com/nd_riverplate/status/22">https://twitter.com/nd_riverplate/status/22</a></p>&mdash; nd_riverplate (@nd_riverplate) <a href="https://twitter.com/nd_riverplate/status/1811834512906809823?ref_src=twsrc%5Etfw">Oct 19, 2023</a></blockquote>
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
              </div>
            </div>
          </div>
        </section>




         {/* Call to Action */}
         <section className="py-16 bg-red-600 text-white text-center relative overflow-hidden">
          <div className="flex justify-center items-center mb-8">
            <img src="/images/River/river-logo.png" alt="Logo River Plate" className="w-24 h-24 mr-4" />
            <h2 className="text-3xl font-bold">¡Asociate a River!</h2>
          </div>
          <p className="text-lg mb-8">Tu momento de ser socio. Hacelo rápido, fácil y 100% online.</p>
          <Link href="https://tumomentodesersocio.riverid.com.ar/" legacyBehavior>
            <a className="px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-gray-200 transition duration-300">Asociate</a>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default River;
