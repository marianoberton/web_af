import { FaFileAlt, FaScroll, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ proyecto, handleVerMas, selectedProject }) => {
  const tipo = proyecto.tipo || 'Ley';
  console.log('Tipo de proyecto:', tipo);

  let icon, color;
  switch(tipo) {
    case 'Ley':
      icon = <FaScroll />;
      color = 'text-blue-800';
      break;
    case 'Declaración':
      icon = <FaFileAlt />;
      color = 'text-green-900';
      break;
    case 'Informes':
      icon = <FaSearch />;
      color = 'text-yellow-900';
      break;
    default:
      icon = <FaScroll />;
      color = 'text-blue-900';
  }

  console.log('Icon y color asignados:', icon, color);

  // ... resto del componente

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <div className="flex items-center mb-4">
        <div className={`mr-5 text-6xl ${color}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">{proyecto.titulo}</h3>
          <button 
            onClick={() => handleVerMas(proyecto)} 
            className={`font-bold text-lg flex items-center ${color}`}
          >
            Ver más 
            {selectedProject === proyecto ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
        </div>
      </div>
      {selectedProject === proyecto && <ProjectDetails proyecto={proyecto} />}
    </div>
  );
};

export default ProjectCard;