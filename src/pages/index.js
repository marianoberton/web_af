import Head from 'next/head';
import Script from 'next/script';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import FeaturedNews from '../app/components/FeaturedNews';
import Biography from '../app/components/Biography';
import FeaturedProjects from '../app/components/FeaturedProjects';
import RiverPlate from '../app/components/RiverPlate';
import SocialFeed from '../app/components/SocialFeed';
import Gallery from '../app/components/Gallery';
import Footer from '../app/components/Footer';
import Contacto from '@/components/contacto';
import { fetchAPI } from '../../lib/api'; // Asegúrate de que la ruta sea correcta

export async function getStaticProps() {
  try {
    const mediaData = await fetchAPI('/medios?populate=*');
    return {
      props: {
        media: mediaData.data || [],
      },
    };
  } catch (error) {
    console.error('Error fetching media data:', error.message);
    return {
      props: {
        media: [],
      },
    };
  }
}

const Home = ({ media }) => {
  return (
    <div>
      <Head>
        <title>Agustín Forchieri - Diputado de Buenos Aires y Dirigente de River Plate</title>

        
        <meta name="description" content="Sitio oficial de Agustín Forchieri, Diputado de Buenos Aires, Prosecretario de River Plate y comprometido con el desarrollo urbano y social de la ciudad. Conoce su biografía, proyectos y noticias." />
        <link rel="icon" href="/favicon.ico" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Agustín Forchieri",
              "jobTitle": "Diputado de Buenos Aires",
              "affiliation": "Legislatura de la Provincia de Buenos Aires",
              "worksFor": {
                "@type": "Organization",
                "name": "Club Atlético River Plate"
              },
              "url": "https://www.agustinforchieri.com.ar",
              "image": "https://www.agustinforchieri.com.ar/images/profile_bio.jpg",
              "sameAs": [
                "https://twitter.com/aforchieri?lang=es",
                "https://www.instagram.com/agustin_forchieri/?hl=es",
               
              ]
            })
          }}
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YRPVCQ0R77"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YRPVCQ0R77');
            `,
          }}
        />
      </Head>

      <Header />
      <Hero />

      <main className="p-5">
        <Biography />
        <FeaturedProjects />
        <RiverPlate />
        <FeaturedNews media={media} />
        <SocialFeed />
      </main>
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
