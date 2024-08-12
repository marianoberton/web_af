import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import { useState, useEffect } from 'react';
import HeroSection from '../app/components/HeroSectionLeg';
import Description from '../app/components/Description';
import Videos from '../app/components/VideosLeg';
import ProjectsSection from '../app/components/ProjectsSection';
import axios from 'axios';

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [videosData, setVideosData] = useState([]);
  const [proyectosPresentados, setProyectosPresentados] = useState([]);
  const [proximosProyectos, setProximosProyectos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/videos-sesiones`);
        const videosData = response.data.data.map(video => ({
          id: video.attributes.id_videos.trim(),
          date: new Date(video.attributes.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }),
        }));
        setVideosData(videosData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    const fetchProyectosPresentados = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/proyectos-presentados`);
        const proyectosData = response.data.data.map(proyecto => ({
          id: proyecto.id,
          ...proyecto.attributes.data
        }));
        setProyectosPresentados(proyectosData);
      } catch (error) {
        console.error('Error fetching proyectos presentados:', error);
      }
    };

    const fetchProximosProyectos = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/proximos-proyectos`);
        const proyectosData = response.data.data.map(proyecto => ({
          id: proyecto.id,
          ...proyecto.attributes.data
        }));
        setProximosProyectos(proyectosData);
      } catch (error) {
        console.error('Error fetching proximos proyectos:', error);
      }
    };

    fetchVideos();
    fetchProyectosPresentados();
    fetchProximosProyectos();
  }, []);

  const handleVerMas = (proyecto) => {
    setSelectedProject(selectedProject === proyecto ? null : proyecto);
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const headerOffset = document.querySelector('header').offsetHeight;
        const element = document.getElementById(`project-details-${proyecto.id}`);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 100);
  };

  return (
    <div>
      <Head>
        <title>Proyectos Presentados</title>
        <meta name="description" content="Proyectos presentados por Agustin Forchieri/Bloque PRO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5 container mx-auto">
        <HeroSection />
        <Description />
        <Videos videosData={videosData} />
        <ProjectsSection 
          title="Proyectos Presentados" 
          projects={proyectosPresentados} 
          handleVerMas={handleVerMas} 
          selectedProject={selectedProject} 
        />
        <ProjectsSection 
          title="Próximos Proyectos" 
          projects={proximosProyectos} 
          handleVerMas={handleVerMas} 
          selectedProject={selectedProject} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default Proyectos;
