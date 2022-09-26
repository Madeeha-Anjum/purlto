import ShortenLink from '../components/ShortenLink';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <h1 className='mb-10 text-center break-words text-site-name'>
        Pushto.site
      </h1>

      <ShortenLink />
    </Layout>
  );
};

export default Home;
