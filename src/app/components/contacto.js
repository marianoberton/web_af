import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    categoria: 'Política',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo enviando los datos a una API
    console.log(formData);
  };

  return (
    <section className="bg-cover bg-center text-gray-800 py-16" style={{ backgroundImage: 'url(/mnt/data/image.png)' }}>
      <div className="container mx-auto bg-gray-200 bg-opacity-80 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Información de Contacto */}
          <div className="text-center md:text-left md:w-1/3 w-full">
            <h2 className="text-4xl font-bold mb-4 text-grey-800">Contacto</h2>
            <p className="text-lg text-gray-800 mb-6">Si tienes propuestas, ideas, iniciativas, podés compartirlas a través de este formulario</p>
          </div>
          {/* Formulario de Contacto */}
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-2/3 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 text-gray-800 shadow-sm focus:border-blue-800 focus:ring-blue-800"
                />
              </div>
              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-800">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 text-gray-800 shadow-sm focus:border-blue-800 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-800">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 text-gray-800 shadow-sm focus:border-blue-800 focus:ring-blue-900"
                ></textarea>
              </div>
              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-800">
                  Categoría
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 text-gray-800 shadow-sm focus:border-blue-800 focus:ring-blue-900"
                >
                  <option value="Política">Política</option>
                  <option value="River">River</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-800 text-white font-bold rounded hover:bg-blue-900 transition duration-300 w-full"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
