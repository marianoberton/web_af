import { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('#__next'); // Esto es necesario para accesibilidad

const RiverPlate = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section 
      className="relative p-5 md:p-10 text-white" 
      style={{ 
        backgroundImage: 'url(/mnt/data/image.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundColor: '#eb192e' 
      }}
    >
      <div className="relative z-10 bg-opacity-90 p-5 md:p-10 rounded-lg max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <Image 
            src="/images/River/river-logo.png" 
            alt="River Plate Logo" 
            width={64} 
            height={64} 
            className="h-16 w-auto mr-4" 
          />
          <h2 className="text-4xl font-bold text-center text-white">River</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="lg:pr-12 order-2 lg:order-1">
            <h4 className="text-4xl font-bold text-center text-white mb-8 lg:text-left">Mi pasión y compromiso</h4>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              River es parte integral de mi vida desde la infancia. Desde los domingos en familia en el Monumental hasta los viajes con amigos, la pasión por el club ha sido una constante. Hoy, como dirigente, tengo el honor y la responsabilidad de defender nuestra historia e identidad.
              
              <br /><br />
              Es impresionante ver el compromiso de hinchas y empleados trabajando juntos por la grandeza de River. Todos los que llevamos a River en el corazón tenemos la misión de mantener vivo este legado para las futuras generaciones.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
            <Image 
              src="/images/River/river-1.jpg" 
              alt="River Plate Estadio Monumental" 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" 
              loading="lazy"
            />
            <Image 
              src="/images/River/river-2.jpg" 
              alt="Dirigentes de River Plate" 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" 
              loading="lazy"
            />
            <Image 
              src="/images/River/river-3.jpg" 
              alt="Festejos River Plate Campeon" 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hidden sm:block" 
              loading="lazy"
            />
            <Image 
              src="/images/River/river_4.jpg" 
              alt="Obras en el estadio Monumental" 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hidden sm:block" 
              loading="lazy"
            />
          </div>
          <div className="text-center lg:text-left order-3 lg:order-3 mt-6 lg:mt-0">
            <Link href="/riverplate" legacyBehavior>
              <a className="px-6 py-3 bg-white text-red-600 rounded hover:bg-gray-200 transition duration-300 text-lg font-bold">Ver más</a>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="River Plate Video"
        className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
      >
        <div className="relative w-full max-w-4xl bg-black p-4 rounded-lg">
          <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl">×</button>
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/jRaxHgZjTGs?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="River Plate Video de presentacion"
            ></iframe>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default RiverPlate;
