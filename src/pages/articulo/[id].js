import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import { fetchAPI } from '../../../lib/api';

export async function getStaticPaths() {
  const response = await fetchAPI('/articles?populate=*');
  const articulosData = response.data.data;

  const paths = articulosData.map((articulo) => ({
    params: { id: articulo.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetchAPI(`/articles/${params.id}?populate=*`);
  const articulo = response.data.data;

  return {
    props: {
      articulo: articulo || {},
    },
  };
}

const Articulo = ({ articulo }) => {
  const { attributes } = articulo;
  const { title, summary, image, content } = attributes;

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
            <img
              src={`http://127.0.0.1:1337${image.data.attributes.url}`}
              alt={title}
              className="object-cover object-center h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">{title}</h1>
            </div>
          </div>

          <div className="p-8 md:p-16">
            <div className="prose lg:prose-xl mx-auto">
              <p>{summary}</p>
              <div dangerouslySetInnerHTML={{ __html: content[0].children[0].text }} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articulo;
