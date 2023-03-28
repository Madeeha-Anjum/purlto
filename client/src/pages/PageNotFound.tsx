import BackgroundBubbles from '../components/ui/BackgroundBubbles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
const PageNotFound = () => {
  return (
    <>
      <div className='relative overflow-hidden bg-gradient-to-bl via-indigo-blue to-steel-blue from-indigo-purple '>
        <BackgroundBubbles />
        <main className='container mx-auto min-h-screen flex flex-col px-2'>
          <Header />
          <section className='flex-1 flex flex-col items-center justify-center'>
            <h1 className='text-7xl text-white font-bold'>404</h1>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default PageNotFound;
