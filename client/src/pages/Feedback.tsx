import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import BackgroundBubbles from '../components/ui/BackgroundBubbles';

const Feedback = () => {
  return (
    <>
      <div className='relative overflow-hidden bg-gradient-to-bl via-indigo-blue to-steel-blue from-indigo-purple '>
        <BackgroundBubbles />
        <main className='container mx-auto min-h-screen flex flex-col px-2'>
          <Header />
          <section className='flex-1 flex flex-col items-center justify-center'>
            <h1 className='text-7xl text-white font-bold'>
              Under Construction...
            </h1>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Feedback;
