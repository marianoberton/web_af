import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import Image from 'next/image';
import { fetchAPI } from '../../../lib/api';

export async function getStaticPaths() {
  const response = await fetchAPI('/articles?populate=*');
  const articulosData = response.data ? response.data : [];

  const paths = articulosData.map((articulo) => ({
    params: { id: articulo.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetchAPI(`/articles/${params.id}?populate=image,author,hero_image`);
  const articulo = response.data ? response.data : null;

  return {
    props: {
      articulo: articulo,
    },
  };
}

const Articulo = ({ articulo }) => {
  if (!articulo) {
    return <div>Artículo no encontrado</div>;
  }

  const { attributes } = articulo;
  const { title, content, author, meta_title, meta_description, tiempo_lectura, hero_image, fecha_de_publicacion } = attributes;

  // Accede a la URL de la imagen del autor desde la API
  const imageUrl = hero_image?.data?.attributes?.url || '/images/default-image.jpg';
  const authorImageUrl = author?.data?.attributes?.image?.data?.attributes?.url || '/images/profile_bio_autor.jpg';

  return (
    <div>
      <Head>
        <title>{meta_title || title}</title>
        <meta name="description" content={meta_description || title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-gray-100 py-10">
        {/* Hero Section with Title */}
        <div className="relative h-96 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
          </div>
        </div>

        {/* Meta Information: Date and Reading Time */}
        <div className="container mx-auto mt-6 text-gray-500 text-center flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 py-4 border-b border-gray-300">
          {fecha_de_publicacion && (
            <div className="text-gray-700 text-sm flex items-center font-semibold">
              <i className="fa fa-calendar-alt mr-2"></i> {new Date(fecha_de_publicacion).toLocaleDateString()}
            </div>
          )}
          {tiempo_lectura && (
            <div className="text-gray-700 text-sm flex items-center font-semibold">
              <i className="fa fa-clock mr-2"></i> {tiempo_lectura} minutos de lectura
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 md:p-16 mt-6">
          <div className="prose lg:prose-xl mx-auto text-justify">
            {content && content.map((section, index) => (
              <p key={index}>
                {section.children.map((child, childIndex) => (
                  <span key={childIndex} className={`${child.bold ? 'font-bold' : ''} ${child.italic ? 'italic' : ''}`}>
                    {child.text}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        {/* Tarjeta del Autor */}
        {author && (
          <div className="container mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg overflow-hidden p-8 md:p-16 flex items-center">
            <Image
              src={authorImageUrl}  // Aquí aseguramos que la URL esté bien
              alt={author.data.attributes.name}
              width={80}
              height={80}
              className="rounded-full mr-6"
            />
            <div>
              <h3 className="text-2xl font-bold">{author.data.attributes.name}</h3>
              <div className="text-gray-700 mt-2">
                {author.data.attributes.bio.map((bioSection, index) => (
                  <p key={index}>{bioSection.children[0].text}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Articulo;
