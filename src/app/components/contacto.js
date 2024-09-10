import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [status, setStatus] = useState(null); // Para mostrar mensajes de éxito o error
  const [loading, setLoading] = useState(false); // Estado para manejar si está cargando

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Comienza el proceso de envío
    console.log('Enviando datos del formulario:', formData);

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('Respuesta del servidor:', data);

      if (res.ok) {
        setStatus('success');
        setFormData({
          nombre: '',
          correo: '',
          mensaje: '',
        });
      } else {
        setStatus('error');
        console.error('Error en el servidor:', data);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-cover bg-center text-gray-800 py-16" style={{ backgroundImage: 'url(/mnt/data/image.png)' }}>
      <div className="container mx-auto bg-gray-200 bg-opacity-80 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Información de Contacto */}
          <div className="text-center md:text-left md:w-1/3 w-full">
            <h2 className="text-4xl font-bold mb-4 text-grey-800">Contacto</h2>
            <p className="text-lg text-gray-800 mb-6">Si tienes propuestas, ideas, iniciativas, podés compartirlas a través de este formulario</p>
            {status === 'success' && <p className="text-green-600">¡Tu mensaje ha sido enviado con éxito!</p>}
            {status === 'error' && <p className="text-red-600">Ocurrió un error al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>}
            {loading && <p className="text-blue-600">Enviando mensaje...</p>}
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
                  disabled={loading} // Deshabilitar el campo mientras se envía
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
                  disabled={loading} // Deshabilitar el campo mientras se envía
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
                  disabled={loading} // Deshabilitar el campo mientras se envía
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-800 text-white font-bold rounded hover:bg-blue-900 transition duration-300 w-full"
                disabled={loading} // Deshabilitar el botón mientras se envía
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
