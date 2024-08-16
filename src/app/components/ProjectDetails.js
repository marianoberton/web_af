const ProjectDetails = ({ proyecto }) => (
  <div id={`project-details-${proyecto.id}`} className="mt-4">
    <h4 className="text-xl font-semibold mb-2">{proyecto.caratula}</h4>
    {/* Ajuste del color de fondo de la descripción */}
    <div className="p-6 rounded-lg mb-4 shadow-md" style={{ backgroundColor: '#d0e0f0' }}>
      <p className="text-lg mb-4">{proyecto.descripcion}</p>
    </div>
  </div>
);

export default ProjectDetails;
