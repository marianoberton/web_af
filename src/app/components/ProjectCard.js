import { FaFileSignature, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ proyecto, handleVerMas, selectedProject }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg w-full">
    <div className="flex items-center mb-4">
      <FaFileSignature className="text-6xl text-yellow-500 mr-5" />
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2">{proyecto.titulo}</h3>
        <button
          onClick={() => handleVerMas(proyecto)}
          className="text-yellow-500 font-bold text-lg flex items-center"
        >
          Ver más
          {selectedProject === proyecto ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </button>
      </div>
    </div>
    {selectedProject === proyecto && <ProjectDetails proyecto={proyecto} />}
  </div>
);

export default ProjectCard;
