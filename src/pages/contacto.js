import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Formulario de contacto y información del diputado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5">
        <h1 className="text-3xl font-bold mb-5">Contacto</h1>

        <form className="mb-5">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
            <input type="text" id="nombre" name="nombre" className="mt-1 p-2 block w-full border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-gray-700">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" className="mt-1 p-2 block w-full border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Enviar</button>
        </form>

        <h2 className="text-2xl font-bold mb-3">Información de Contacto</h2>
        <p>Email: diputado@ejemplo.com</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Dirección: Calle Falsa 123, Ciudad, País</p>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
