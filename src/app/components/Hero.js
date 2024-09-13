import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/pastor.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 container mx-auto flex items-end md:items-center h-full text-white p-5">
        <div className="w-full md:max-w-lg text-right ml-auto mb-4 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold">Agustín Forchieri</h1>
                  </div>
      </div>
    </div>
  );
};

export default Hero;
