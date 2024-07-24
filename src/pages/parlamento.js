// Proyectos.js
import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import { useState } from 'react';
import HeroSection from '../app/components/HeroSectionLeg';
import Description from '../app/components/Description';
import Videos from '../app/components/VideosLeg';
import ProjectsSection from '../app/components/ProjectsSection';

// Datos de los proyectos
const proyectosPresentados = [
  {
    id: 1,
    titulo: 'Adhesión al RIGI',
    descripcion: 'Adhesión al Régimen de Incentivos para Grandes Inversiones (RIGI).',
    introduccion: 'En el marco del desarrollo económico y social de nuestra querida Provincia de Buenos Aires, me enorgullece presentar este proyecto de ley que adhiere al Régimen de Incentivos para Grandes Inversiones (RIGI). Este régimen, sancionado el 28 de junio de 2024 por el Honorable Congreso de la Nación, es una herramienta clave para atraer inversiones significativas y fomentar el crecimiento sostenible en nuestra región.',
    objetivos: 'Este proyecto tiene como finalidad principal promover la instalación y desarrollo de proyectos de grandes inversiones en nuestra provincia. Al adherirnos al RIGI, buscamos incentivar la llegada de capitales que potencien sectores estratégicos como la energía, petróleo, gas, infraestructura, turismo y tecnología, esenciales para el desarrollo integral de Buenos Aires.',
    beneficios: [
      'Exenciones Impositivas: Facilita exenciones fiscales a los proyectos que califiquen como grandes inversiones, reduciendo significativamente la carga tributaria y promoviendo un entorno económico más atractivo.',
      'Estabilidad Jurídica y Fiscal: Garantiza condiciones estables y predecibles para los inversores, proporcionando seguridad jurídica y fiscal a largo plazo.',
      'Incentivos Financieros: Ofrece acceso a financiamiento preferencial y apoyo en la infraestructura necesaria para la implementación de los proyectos.'
    ],
    impacto: 'Nuestra provincia, que representa el 37% de la población del país y contribuye con el 35% del Producto Bruto Nacional, se beneficiará enormemente con la implementación de este régimen. La llegada de grandes inversiones generará empleo local, dinamizará las economías regionales y fortalecerá la capacidad productiva de las pequeñas y medianas empresas proveedoras de insumos.',
    fundamentos: 'La sanción de este proyecto es un paso vital para el desarrollo productivo de nuestra provincia. La adhesión al RIGI abre la puerta a la llegada de inversiones que permitirán la creación de nuevos puestos de trabajo, incrementarán las exportaciones y generarán las condiciones de previsibilidad y estabilidad necesarias para el crecimiento sostenido.',
    invitacion: 'Hacemos un llamado a todos los municipios de la Provincia de Buenos Aires para que se adhieran a esta iniciativa y trabajemos juntos en la promoción de grandes inversiones que beneficien a toda nuestra comunidad.',
    imagen: '/images/gnl3.jpg'
  },
  // Aquí puedes agregar más proyectos
];

const proximosProyectos = [
  {
    "id": 2,
    "titulo": "Boleta Única de Papel",
    "descripcion": "Adopción del sistema de Boleta Única de Papel (BUP) para las elecciones provinciales en Buenos Aires.",
    "introduccion": "En un esfuerzo por modernizar y hacer más eficiente el proceso electoral en la Provincia de Buenos Aires, presentamos este proyecto de ley que implementa el sistema de Boleta Única de Papel (BUP). Este sistema, que ya ha demostrado ser eficaz en otras jurisdicciones, simplifica el proceso de votación, reduce costos y mejora la transparencia y seguridad del proceso electoral.",
    "objetivos": "El objetivo principal de este proyecto es implementar la Boleta Única de Papel en todas las elecciones provinciales de Buenos Aires, con la finalidad de simplificar el proceso de votación para los ciudadanos, reducir los costos asociados a la impresión y distribución de boletas, aumentar la transparencia y la seguridad del proceso electoral, y minimizar el impacto ambiental de las elecciones.",
    "beneficios": [
      "Simplificación del Proceso de Votación: Al unificar todas las candidaturas en una sola boleta, el proceso se vuelve más claro y accesible para los votantes, evitando confusiones y errores.",
      "Reducción de Costos: Se estima un ahorro significativo al evitar la impresión de múltiples boletas partidarias. Según expertos, el sistema actual de boletas partidarias representa un alto costo económico y ambiental debido a la cantidad de papel y tinta utilizados.",
      "Mayor Transparencia y Seguridad: La BUP elimina la posibilidad de prácticas fraudulentas, como la desaparición de boletas, y facilita el escrutinio y auditoría de los votos emitidos.",
      "Impacto Ambiental Positivo: La reducción en el uso de papel y tinta contribuye a un proceso electoral más sostenible y ecológico."
    ],
    "impacto": "La implementación de la Boleta Única de Papel en Buenos Aires tendrá un impacto significativo en la mejora del proceso electoral. La provincia, que es el distrito electoral más grande del país, se beneficiará enormemente con la simplificación del proceso de votación, la reducción de costos y el incremento en la transparencia y confianza en el sistema electoral. Además, este sistema alineará a Buenos Aires con prácticas electorales más modernas y sostenibles, siguiendo ejemplos exitosos de otras provincias y países.",
    "fundamentos": "Adoptar la Boleta Única de Papel es un paso crucial para modernizar y mejorar la eficiencia de nuestras elecciones. Este sistema no solo aborda problemas actuales del proceso electoral, sino que también aporta beneficios adicionales en términos de costos y sostenibilidad. Al centralizar la impresión y distribución de las boletas, garantizamos que todos los votantes tengan acceso a la oferta completa de candidatos, asegurando un proceso más justo y equitativo.",
    "imagen": "/images/bup.jpg"
  }
  
  // Aquí puedes agregar más proyectos futuros
];

const videosData = [
  { id: 'fOGYwSM_kRs', date: '10 de julio' },
  { id: 'ZTWmsgnsMj0', date: '15 de mayo' },
  { id: 'EbTZ34-mRU4', date: '20 de marzo' },
  { id: '4E4vSVUbWHQ', date: '20 de febrero' }
];


const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
