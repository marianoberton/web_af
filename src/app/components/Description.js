import Image from 'next/image';

const Description = () => (
  <div className="container mx-auto mb-10">
    <hr className="border-t-2 border-gray-300 mb-5" />
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 p-5">
        <p className="text-xl md:text-2xl text-justify">
          Presido el bloque PRO de la Cámara de Diputados de la Provincia de Buenos Aires. Asumí en diciembre de 2023 y encabecé la boleta a legisladores de la lista de Juntos por el Cambio por la Primera Sección Electoral.
        </p>
      </div>
      <div className="md:w-1/3 p-5 flex justify-center">
        <Image 
          src="/images/jura2.jpg" 
          alt="Jura del Diputado" 
          width={500}
          height={300}
          className="w-full md:w-auto h-auto rounded-lg"
        />
      </div>
    </div>
  </div>
);

export default Description;
