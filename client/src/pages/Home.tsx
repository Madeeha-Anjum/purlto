import PageSection from '../components/ui/PageSection';
import ShortenLink from '../components/ShortenLink';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <PageSection>
        <h1 className='mb-10 text-center break-words text-site-name'>
          Pushto.site
        </h1>

        <ShortenLink />
      </PageSection>
    </Layout>
  );
};

export default Home;
