import { Toaster } from 'react-hot-toast';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MainContent from './components/MainContent';
import BackgroundBubbles from './components/ui/BackgroundBubbles';

const App2: React.FC = () => {
  return (
    <>
      <div className='min-h-screen relative overflow-hidden bg-gradient-to-bl via-indigo-blue to-steel-blue from-indigo-purple '>
        <BackgroundBubbles />
        <main className='container mx-auto min-h-screen flex flex-col px-2'>
          <Header />
          <section className='flex-1'>
            <MainContent />
          </section>
          <Footer />
        </main>
        <Toaster />
      </div>
    </>
  );
};

export default App2;
