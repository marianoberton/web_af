import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-background11.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto flex items-center h-full text-white p-5">
        <div className="w-full md:max-w-lg text-center md:text-right ml-auto">
          <h1 className="text-4xl md:text-6xl font-bold">Agustín Forchieri</h1>
          <p className="mt-4 text-xl md:text-2xl">Conoce más sobre su compromiso con la comunidad y su pasión por River Plate</p>
          <div className="mt-8 space-x-4">
            <Link href="/biografia" legacyBehavior>
              <a className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">Biografía</a>
            </Link>
            <Link href="/riverplate" legacyBehavior>
              <a className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">River Plate</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
