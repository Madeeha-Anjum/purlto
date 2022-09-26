import { useRouteError } from 'react-router-dom';
import PageSection from './components/ui/PageSection';

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <PageSection>
      <div id='error-page ' className='bg-black'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </PageSection>
  );
};

export default ErrorPage;
