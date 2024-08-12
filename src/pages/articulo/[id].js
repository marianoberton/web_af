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
  const response = await fetchAPI(`/articles/${params.id}?populate=image,author_img`);
  const articulo = response.data ? response.data : null;

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
  const { title, summary, image, content, descripcion, author, author_img } = attributes;

  const imageUrl = image?.data?.attributes?.url 
    ? `${process.env.STRAPI_API_URL}${image.data.attributes.url}` 
    : '/images/default-image.jpg';

  const authorImageUrl = author_img?.data?.attributes?.url 
    ? `${process.env.STRAPI_API_URL}${author_img.data.attributes.url}` 
    : '/images/default-author.jpg';

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
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              className="object-cover object-center"
              onError={(e) => { e.target.onerror = null; e.target.src = "/images/default-image.jpg"; }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">{title}</h1>
            </div>
          </div>

          <div className="p-8 md:p-16">
            <div className="prose lg:prose-xl mx-auto text-justify">
              
              {content && Array.isArray(content) && content.length > 0 && (
                content.map((section, index) => (
                  <div key={index} dangerouslySetInnerHTML={{ __html: section.children[0].text }} />
                ))
              )}
            </div>
          </div>

          {/* Sección del Autor */}
          {author && (
            <div className="flex items-center p-8 md:p-16 bg-gray-100">
              <Image
                src={authorImageUrl}
                alt={author}
                width={100}
                height={100}
                className="rounded-full mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold">{author}</h3>
                <p className="text-gray-700">{descripcion}</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articulo;
