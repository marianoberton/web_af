import { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ title, projects, handleVerMas, selectedProject }) => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Inicialmente mostrar 4 proyectos

  // Definimos los títulos de los proyectos relevantes que queremos anclar arriba
  const proyectosRelevantes = ['Boleta Única de Papel', 'Adhesión al RIGI'];

  // Separar los proyectos relevantes del resto
  const proyectosAnclados = projects.filter((proyecto) =>
    proyectosRelevantes.includes(proyecto.titulo)
  );

  const otrosProyectos = projects.filter(
    (proyecto) => !proyectosRelevantes.includes(proyecto.titulo)
  ).reverse(); // Invertimos el orden de los demás proyectos

  // Combinar los proyectos anclados y los otros proyectos
  const todosLosProyectos = [...proyectosAnclados, ...otrosProyectos];

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4); // Cargar 4 proyectos más al hacer clic en el botón
  };

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold mb-5 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {todosLosProyectos.slice(0, visibleProjects).map((proyecto) => (
          <ProjectCard 
            key={proyecto.id} 
            proyecto={proyecto} 
            handleVerMas={handleVerMas} 
            selectedProject={selectedProject} 
          />
        ))}
      </div>
      {visibleProjects < todosLosProyectos.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMoreProjects}
            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
