import { Toaster } from 'react-hot-toast';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MainContent from './components/MainContent';
import BackgroundBubbles from './components/ui/BackgroundBubbles';
import ParticleEffect from './components/ParticleEffect';

const App: React.FC = () => {
  return (
    <>
      <div className='relative bg-gradient-to-bl via-indigo-blue to-steel-blue from-indigo-purple'>
        <div className='absolute'>
          <ParticleEffect />
        </div>
        <div className='grid grid-rows-pancake min-h-screen container mx-auto px-5'>
          <Header />
          <div className='flex items-center '>
            <MainContent />
          </div>
          <Footer />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default App;
