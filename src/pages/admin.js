import dynamic from 'next/dynamic';
const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init();
    }),
  { ssr: false }
);
const Admin = () => <div />;
export default Admin;
