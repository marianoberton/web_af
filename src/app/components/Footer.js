const Footer = () => {
  return (
    <footer className="p-10 bg-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Redes Sociales */}
          <div className="text-gray-800 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Redes Sociales</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter-icon.png" alt="Twitter" className="h-8 w-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook-icon.png" alt="Facebook" className="h-8 w-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-icon.png" alt="Instagram" className="h-8 w-8" />
              </a>
            </div>
          </div>
          {/* Información de Contacto */}
          <div className="text-gray-800 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Contacto</h3>
            <p>Correo: contacto@diputado.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          {/* Logo */}
          <div className="text-gray-800 text-center md:text-right">
            <img src="/images/logo.png" alt="Logo" className="h-10 mx-auto md:mx-0" />
          </div>
        </div>
        <div className="text-center text-gray-800 mt-10">
          <p>&copy; 2023 Diputado. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
