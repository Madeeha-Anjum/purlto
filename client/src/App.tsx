import Footer from './components/Footer';
import Input from './components/Input';

function App() {
  return (
    <main className='flex flex-col items-center min-h-screen bg-gradient-to-bl to-indigo from-steel-blue'>
      <section className='w-full pt-8'>
        <div className='px-2 sm:px-4 max-w-7xl'>
          <h1 className='text-3xl font-semibold break-words'>Pushto.site</h1>
        </div>
      </section>

      <section className='flex flex-col flex-1 w-full'>
        <section className='px-2 my-auto sm:px-4'>
          <div className='mx-auto max-w-7xl'>
            <Input />
          </div>
        </section>
        <section className='px-2 sm:px-4'>
          <div className='pt-20 mx-auto text-xl max-w-7xl sm:text-2xl '>
            <Footer />
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
