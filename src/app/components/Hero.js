import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/pastor.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto flex items-end md:items-center h-full text-white p-5">
        <div className="w-full md:max-w-lg text-right ml-auto mb-4 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold">Agustín Forchieri</h1>
          
          <div className="mt-8 space-x-4 flex justify-end">
            <Link href="/parlamento" legacyBehavior>
              <a className="px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300">Legislatura</a>
            </Link>
            <Link href="/riverplate" legacyBehavior>
              <a className="px-6 py-3 bg-red-500 text-white rounded flex items-center hover:bg-red-600 transition duration-300">
                River
                <img src="/images/River/river-logo.png" alt="River Plate Logo" width={20} height={20} className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
