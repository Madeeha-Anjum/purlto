import ShortenLink from './components/ShortenLink';
import Layout from './components/layout';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Layout>
        <h1 className='mb-10 text-center break-words text-site-name'>Purlto</h1>
        <ShortenLink />
      </Layout>
      <Toaster />
    </>
  );
};
export default App;
