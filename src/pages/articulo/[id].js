import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import Image from 'next/image';
import { fetchAPI } from '../../../lib/api';

export async function getStaticPaths() {
  const response = await fetchAPI('/articles?populate=*');
  console.log('API Response in getStaticPaths:', response);

  const articulosData = response.data ? response.data : [];

  console.log('Articulos Data:', articulosData);

  const paths = articulosData.map((articulo) => ({
    params: { id: articulo.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetchAPI(`/articles/${params.id}?populate=*`);
  console.log('API Response in getStaticProps:', response);

  const articulo = response.data ? response.data : null;

  console.log('Articulo:', articulo);

  return {
    props: {
      articulo: articulo,
    },
  };
}

const Articulo = ({ articulo }) => {
  if (!articulo) {
    return <div>Article not found</div>;
  }

  const { attributes } = articulo;
  const { title, summary, image, content } = attributes;

  // Verificar si la URL de la imagen está disponible
  const imageUrl = image && image.data && image.data.attributes ? 
    `${process.env.STRAPI_API_URL}${image.data.attributes.url}` : null;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={summary} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-gray-100 py-10">
        <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-96 w-full overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                className="object-cover object-center"
                onError={(e) => { e.target.onerror = null; e.target.src = "/path-to-default-image.jpg"; }} // Reemplaza con tu imagen por defecto
              />
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-gray-200">
                <p className="text-gray-600">Imagen no disponible</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">{title}</h1>
            </div>
          </div>

          <div className="p-8 md:p-16">
            <div className="prose lg:prose-xl mx-auto">
              <p>{summary}</p>
              {content && Array.isArray(content) && content.length > 0 && (
                <div dangerouslySetInnerHTML={{ __html: content[0].children[0].text }} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articulo;
