const ProjectDetails = ({ proyecto }) => (
    <div id={`project-details-${proyecto.id}`} className="mt-4">
      <p className="text-lg mb-4"> {proyecto.introduccion}</p>
      <p className="text-lg mb-4"><strong>Objetivos:</strong> {proyecto.objetivos}</p>
      <div className="bg-blue-200 p-6 rounded-lg mb-4 shadow-md">
        <p className="text-lg mb-4"><strong>Beneficios del Proyecto:</strong></p>
        <ul className="list-disc list-inside ml-5 leading-relaxed">
          {proyecto.beneficios.map((beneficio, index) => (
            <li key={index} className="mb-2">{beneficio}</li>
          ))}
        </ul>
      </div>
      <p className="text-lg mb-4"><strong>Impacto en la Provincia de Buenos Aires:</strong> {proyecto.impacto}</p>
      <p className="text-lg mb-4"><strong>Fundamentos:</strong> {proyecto.fundamentos}</p>
      <p className="text-lg mb-4"> {proyecto.invitacion}</p>
    </div>
  );
  
  export default ProjectDetails;
  