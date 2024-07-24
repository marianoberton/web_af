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

export default function Home() {
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
        <FeaturedNews />
        <SocialFeed />
        
       </main>
      <Contacto />  
      <Footer />
    </div>
  );
}
