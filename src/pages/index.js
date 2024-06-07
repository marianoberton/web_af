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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web del Diputado</title>
        <meta name="description" content="Sitio web del diputado y dirigente de River Plate" />
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

      <Footer />
    </div>
  );
}
