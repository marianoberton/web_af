import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import SocialFeedND from '../app/components/SocialFeed-nd';

const River = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [instagramPosts, setInstagramPosts] = useState([]);

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

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/tweets-nds`);
        const tweetsData = response.data.data.map(tweet => ({
          id: tweet.id,
          twitterUrl: tweet.attributes.twitterUrl,
        }));
        setTweets(tweetsData);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();

    // Load Twitter script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get('/api/instagram-feed');
        const instagramData = response.data.data.map(post => ({
          id: post.id,
          type: post.media_type,
          postPic: post.media_url,
        }));
        setInstagramPosts(instagramData.slice(0, 4)); // Limitar a 4 posts
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  const renderPostContent = (post) => {
    switch (post.type) {
      case 'IMAGE':
        return <Image src={post.postPic} alt="Instagram Post" width={400} height={256} className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300" />;
      case 'VIDEO':
        return (
          <div className="relative w-full" style={{ paddingTop: '177.78%' /* 9:16 aspect ratio */ }}>
            <video controls className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              <source src={post.postPic} type="video/mp4" />
            </video>
          </div>
        );
      default:
        return null;
    }
  };

  const heroVideoUrl = `https://res.cloudinary.com/dedryjsvs/video/upload/v1723734464/river_hero_85f5b8f767.mp4`;

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
          <Image
            src="https://res.cloudinary.com/dedryjsvs/image/upload/v1723735067/IMG_7550_copia_4532583e6a.jpg"
            alt="River Plate"
            layout="fill"
            className="absolute w-full h-full object-cover"
          />
        ) : (
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src={heroVideoUrl} type="video/mp4" />
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
                Mi vida está atravesada por River. En la infancia, recuerdo cómo contaba los días para que llegara el domingo para ir con mi familia al Monumental; siempre con mi papá y mi hermano. Deseábamos llegar a la cancha y empezar a subir las escaleras internas del estadio, hasta que por fin veíamos el pasto, la gente. Miles y miles de personas en un mismo lugar, con el mismo objetivo: compartir la pasión y alentar al más grande. Después del partido siempre había tiempo para respetar las costumbres e ir a comer una pizza todos juntos.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                Recuerdo subirme al colectivo 130, esperando que el recorrido sea lo más rápido posible. También en estos tiempos llegaron los viajes para ver al millonario y abrazarme con desconocidos en un grito de gol. Esperaba que publicaran el fixture para empezar a planificar con mis amigos a dónde y cómo iríamos. La única certeza que teníamos era que queríamos estar.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                Hoy cambiaron muchas cosas en mi vida menos la pasión por River. Cumplí el sueño de formar mi familia, ser quien los lleve a la cancha y les regale su primera camiseta, ver a mi hija mayor disfrutar con su abuelo esta pasión compartida. A su vez, tuve el gran honor de representar al club como Asambleísta, Secretario de la Asamblea y Prosecretario, cargo que ocupo actualmente.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                Para mí, ser dirigente de River es mucho más que un título: es una misión y una responsabilidad enorme. Defender nuestros colores, nuestra historia y nuestra identidad es algo que llevo con orgullo y dedicación. Es impresionante ver el compromiso de los hinchas y empleados del club, trabajando juntos para que River siga siendo el más grande de la Argentina. Todos los que llevamos a River en el corazón tenemos la responsabilidad de seguir este legado, para que la grandeza que nos define hoy siga viva en nuestros hijos y en los hijos de ellos.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <Image src="/images/River/estadio2.jpeg" alt="River Plate 1" width={400} height={400} className="w-full h-full object-cover rounded-lg shadow-lg" />
              <Image src="/images/River/af_y_dirigentes_cancha.jpeg" alt="River Plate 2" width={400} height={400} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="md:hidden">
            <h2 className="text-4xl font-bold mb-4">River</h2>
            <p className="text-lg leading-relaxed mb-4">
              Mi vida está atravesada por River. En la infancia, recuerdo cómo contaba los días para que llegara el domingo para ir con mi familia al Monumental; siempre con mi papá y mi hermano. Deseábamos llegar a la cancha y empezar a subir las escaleras internas del estadio, hasta que por fin veíamos el pasto, la gente. Miles y miles de personas en un mismo lugar, con el mismo objetivo: compartir la pasión y alentar al más grande. Después del partido siempre había tiempo para respetar las costumbres e ir a comer una pizza todos juntos.
            </p>
            <Image src="/images/River/estadio2.jpeg" alt="River Plate 1" width={400} height={400} className="w-full h-full object-cover rounded-lg shadow-lg mb-4" />
            <p className="text-lg leading-relaxed mb-4">
              Recuerdo subirme al colectivo 130, esperando que el recorrido sea lo más rápido posible. También en estos tiempos llegaron los viajes para ver al millonario y abrazarme con desconocidos en un grito de gol. Esperaba que publicaran el fixture para empezar a planificar con mis amigos a dónde y cómo iríamos. La única certeza que teníamos era que queríamos estar.
            </p>
            <Image src="/images/River/af_y_dirigentes_cancha.jpeg" alt="River Plate 2" width={400} height={400} className="w-full h-full object-cover rounded-lg shadow-lg mb-4" />
            <p className="text-lg leading-relaxed mb-4">
              Hoy cambiaron muchas cosas en mi vida menos la pasión por River. Cumplí el sueño de formar mi familia, ser quien los lleve a la cancha y les regale su primera camiseta, ver a mi hija mayor disfrutar con su abuelo esta pasión compartida. A su vez, tuve el gran honor de representar al club como Asambleísta, Secretario de la Asamblea y Prosecretario, cargo que ocupo actualmente.
            </p>
            <p className="text-lg leading-relaxed">
              Para mí, ser dirigente de River es mucho más que un título: es una misión y una responsabilidad enorme. Defender nuestros colores, nuestra historia y nuestra identidad es algo que llevo con orgullo y dedicación. Es impresionante ver el compromiso de los hinchas y empleados del club, trabajando juntos para que River siga siendo el más grande de la Argentina. Todos los que llevamos a River en el corazón tenemos la responsabilidad de seguir este legado, para que la grandeza que nos define hoy siga viva en nuestros hijos y en los hijos de ellos.
            </p>
          </div>
        </section>

        {/* Sección de Agrupación Nuevos Dirigentes */}
        <section className="py-16 bg-gray-200 text-gray-800 text-center relative overflow-hidden">
          <div className="flex justify-center items-center mb-8">
            <Image src="/images/River/logo_nd.png" alt="Logo Nuevos Dirigentes" width={100} height={100} className="w-24 h-24 mr-4" />
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

        <SocialFeedND />

        {/* Call to Action */}
        {/* 
        <section className="py-16 bg-red-600 text-white text-center relative overflow-hidden">
          <div className="flex justify-center items-center mb-8">
            <Image src="/images/River/river-logo.png" alt="Logo River Plate" width={100} height={100} className="w-24 h-24 mr-4" />
            <h2 className="text-3xl font-bold">¡Asociate a River!</h2>
          </div>
          <p className="text-lg mb-8">Tu momento de ser socio. Hacelo rápido, fácil y 100% online.</p>
          <Link href="https://tumomentodesersocio.riverid.com.ar/" legacyBehavior>
            <a className="px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-gray-200 transition duration-300">Asociate</a>
          </Link>
        </section> 
        */}
      </main>

      <Footer />
    </div>
  );
};

export default River;
