import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-gray-800">AGUSTIN FORCHIERI</a>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300">Inicio</a>
          </Link>
          <Link href="/biografia" legacyBehavior>
            <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300">Biografía</a>
          </Link>
          <Link href="/parlamento" legacyBehavior>
            <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300">Parlamento</a>
          </Link>
          <Link href="/articulos" legacyBehavior>
            <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300">Artículos</a>
          </Link>
          <Link href="/river" legacyBehavior>
            <a className="text-gray-800 font-semibold hover:text-red-500 transition duration-300">River</a>
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-5">
          <nav className="flex flex-col space-y-4">
            <Link href="/" legacyBehavior>
              <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>Inicio</a>
            </Link>
            <Link href="/biografia" legacyBehavior>
              <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>Biografía</a>
            </Link>
            <Link href="/parlamento" legacyBehavior>
              <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>Parlamento</a>
            </Link>
            <Link href="/articulos" legacyBehavior>
              <a className="text-gray-800 font-semibold hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>Artículos</a>
            </Link>
            <Link href="/river" legacyBehavior>
              <a className="text-gray-800 font-semibold hover:text-red-500 transition duration-300" onClick={toggleMenu}>River</a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
