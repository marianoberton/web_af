import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from 'remark-html';
import { remark } from 'remark';

export async function getStaticPaths() {
  const articlesDirectory = path.join(process.cwd(), 'content/articulos');
  const filenames = fs.readdirSync(articlesDirectory);

  const paths = filenames.map((filename) => ({
    params: { id: filename.replace('.md', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articlesDirectory = path.join(process.cwd(), 'content/articulos');
  const filePath = path.join(articlesDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const contentHtml = await remark().use(markdownToHtml).process(content);
  const contentHtmlString = contentHtml.toString();

  return {
    props: {
      data,
      contentHtmlString,
    },
  };
}

const Articulo = ({ data, contentHtmlString }) => {
  return (
    <div>
      <Head>
        <title>{data.titulo}</title>
        <meta name="description" content={data.resumen} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-5 container mx-auto">
        <h1 className="text-4xl font-bold mb-5">{data.titulo}</h1>
        <div className="relative h-64 w-full overflow-hidden rounded-lg mb-4">
          <img src={data.imagen} alt={data.titulo} className="object-cover object-center h-full w-full" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtmlString }} />
      </main>

      <Footer />
    </div>
  );
};

export default Articulo;
