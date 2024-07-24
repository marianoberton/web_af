import ProjectCard from './ProjectCard';

const ProjectsSection = ({ title, projects, handleVerMas, selectedProject }) => (
  <div className="mt-10">
    <h2 className="text-4xl font-bold mb-5 text-center">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {projects.map((proyecto) => (
        <ProjectCard 
          key={proyecto.id} 
          proyecto={proyecto} 
          handleVerMas={handleVerMas} 
          selectedProject={selectedProject} 
        />
      ))}
    </div>
  </div>
);

export default ProjectsSection;
