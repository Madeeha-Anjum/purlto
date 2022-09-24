import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <main className='bg-gradient-to-bl via-indigo-blue to-steel-blue from-indigo-purple'>
      <div className='relative flex flex-col items-center min-h-screen overflow-clip'>
        <Header />

        <section className='flex flex-col flex-1 w-full'>
          <div className='px-2 my-auto sm:px-4'>
            {/* center the main content  */}
            {children}
          </div>
        </section>

        <Footer />

        {/* Bubbles! */}
        <span className='absolute scale-150 bg-transparent border rounded-full w-60 h-60 top-10 -right-10 border-cool-grey/10'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 right-44 top-48'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 left-44 top-72'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 left-60 bottom-44'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 right-60 bottom-32'></span>
      </div>
    </main>
  );
}

export default Layout;
