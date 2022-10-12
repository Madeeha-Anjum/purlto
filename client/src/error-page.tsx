import Layout from './components/layout';
import PageSection from './components/ui/PageSection';
import Donut from './assets/images/donut_love.svg';
const ErrorPage = () => {
  return (
    <Layout>
      <PageSection>
        <div id='error-page' className=''>
          <div className='flex justify-center items-center  '>
            <h1 className='text-7xl text-white font-bold'>404</h1>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default ErrorPage;
