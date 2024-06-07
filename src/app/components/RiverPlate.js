import { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { FaPlay } from 'react-icons/fa';

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
    <section className="relative p-10 text-white" style={{ backgroundImage: 'url(/mnt/data/image.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#eb192e' }}>
      <div className="relative z-10 bg-opacity-90 p-10 rounded-lg">
        <div className="flex items-center justify-center mb-10">
          <img src="/images/river-logo.png" alt="River Plate Logo" className="h-16 w-auto mr-4" />
          <h2 className="text-4xl font-bold text-center text-white">River Plate</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Agustin Forchieri juega un papel fundamental en River Plate, donde su liderazgo y visión han contribuido significativamente al desarrollo del club. Su enfoque está en promover el talento juvenil, mejorar las infraestructuras del club y fortalecer los programas sociales que impactan positivamente en la comunidad.
            </p>
            <ul className="mb-6">
              <li className="mb-2">
                <strong>500+</strong> <span className="ml-2">Jóvenes talentos promovidos</span>
              </li>
              <li className="mb-2">
                <strong>20+</strong> <span className="ml-2">Infraestructuras mejoradas</span>
              </li>
              <li className="mb-2">
                <strong>1000+</strong> <span className="ml-2">Beneficiarios de programas sociales</span>
              </li>
            </ul>
            <div className="text-center md:text-left">
              <Link href="/riverplate" legacyBehavior>
                <a className="px-6 py-3 bg-white text-red-600 rounded hover:bg-gray-200 transition duration-300 text-lg font-bold">Ver más sobre River Plate</a>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/river-1.jpg" alt="River Plate Image 1" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <img src="/images/river-2.jpg" alt="River Plate Image 2" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <img src="/images/river-3.jpg" alt="River Plate Image 3" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <div className="relative cursor-pointer" onClick={openModal}>
              <img src="/images/thumbnails-river.jpg" alt="River Plate Video Thumbnail" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              <FaPlay className="absolute inset-0 w-12 h-12 text-white m-auto" />
            </div>
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
              title="River Plate Video"
            ></iframe>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default RiverPlate;
