import ShortenLink from '../components/ShortenLink';
import Layout from '../components/Layout';
import Title from '../components/Title';
type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <section className='flex flex-col flex-1 w-full'>
        <div className='px-2 my-auto sm:px-4'>
          <Title />
          <ShortenLink />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
