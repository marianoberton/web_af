import Link from 'next/link';
import Image from 'next/image';

const FeaturedNews = ({ media }) => {
  if (!media || media.length === 0) {
    return <p>No media available</p>;
  }

  return (
    <section className="p-4 md:p-10 bg-white w-full max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Medios</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <div key={item.id} className="bg-gray-200 p-4 rounded-lg shadow-lg w-full">
            <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={`${process.env.STRAPI_API_URL}${item.attributes.image.data.attributes.url}`}
                alt={item.attributes.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">{item.attributes.title}</h3>
            <p className="text-gray-700 mb-4">{item.attributes.description}</p>
            <Link href={item.attributes.link} legacyBehavior>
              <a className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-300 inline-block">Leer más</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
