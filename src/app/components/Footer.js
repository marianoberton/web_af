import Link from 'next/link';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="p-10 bg-gray-200 text-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Redes Sociales */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Redes Sociales</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://twitter.com/aforchieri?lang=es" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-8 w-8 text-gray-800 hover:text-yellow-600" />
              </a>
              <a href="https://www.instagram.com/agustin_forchieri/?hl=es" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-8 w-8 text-gray-800 hover:text-yellow-600" />
              </a>
            </div>
          </div>
          {/* Logo */}
          <div className="text-center md:text-right">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold text-gray-800">AGUSTIN FORCHIERI</a>
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.cariverplate.com.ar/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/River/river-logo.png" alt="River Plate" width={40} height={40} />
            </a>
            <a href="https://www.hcdiputados-ba.gov.ar/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo-legis.png" alt="Cámara de Diputados" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="text-center text-gray-600">&copy; 2024 Agustín Forchieri. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
