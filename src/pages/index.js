import Head from 'next/head';
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
        <title>Agustín Forchieri</title>
        <meta name="description" content="Diputado Agustín Forchieri Dirigente de River" />
        <link rel="icon" href="/favicon.ico" />
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
      {/* <Contacto /> */}
      <Footer />
    </div>
  );
};

export default Home;
