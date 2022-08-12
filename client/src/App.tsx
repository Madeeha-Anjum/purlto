import { useState } from 'react';
import axios from 'axios';
import Copy from './components/icons/Copy';
import classnames from 'classnames';

function App() {
  const [userInput, setUserInput] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const delay = (time: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        return resolve();
      }, time);
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userInput);
    setIsLoading(true);

    await delay(1000);
    setIsLoading(false);

    restartAnimation();

    // setIsLoading(false);

    // axios
    //   .post('http://localhost:5000/api/v1/shorten', {
    //     url: userInput,
    //   })
    //   .then((res) => {
    //     setShortenedUrl(res.data.slug);
    //   });
    // setUserInput('');
  };

  const restartAnimation = () => {
    requestAnimationFrame(() => {
      setShowAnimation(true);
    });

    setShowAnimation(false);
  };

  return (
    <main className='bg-gradient-to-bl via-indigo-blue to-steel-blue from-indigo-purple'>
      <div className='relative flex flex-col items-center min-h-screen overflow-clip'>
        <section className='w-full pt-8'>
          <div className='px-2 sm:px-4 max-w-7xl'>
            <h1 className='text-3xl font-semibold break-words'>Pushto.site</h1>
          </div>
        </section>

        <section className='flex flex-col flex-1 w-full'>
          <div className='px-2 my-auto sm:px-4'>
            {/* Shorten URL */}
            <section className='mx-auto max-w-7xl'>
              <div className='sm:px-28'>
                <h1 className='mb-10 text-center break-words text-site-name'>
                  Pushto.site
                </h1>

                <form onSubmit={onSubmit}>
                  <div className='flex border shadow-inner rounded-xl bg-black/10 backdrop-opacity-40 backdrop-blur-3xl backdrop-brightness-200 border-cool-grey/20'>
                    <input
                      className='flex-grow w-20 p-5 text-white bg-transparent focus:outline-none placeholder:text-white/60'
                      type='text'
                      placeholder='Paste your URL'
                      onChange={onInputChange}
                      value={userInput}
                    />
                    <button
                      className={classnames(
                        { 'animate-push': showAnimation },
                        `w-1/4 transition-all duration-1000 flex items-center m-1 shadow-inner bg-gradient-to-r from-[#7be5c9] via-[#7ec5bb] to-[#0e9c97] rounded-xl px-8 text-center`
                      )}
                    >
                      {isLoading && (
                        <div className='-ml-4 scale-50'>
                          <span className=' loader'></span>
                        </div>
                      )}
                      <div className='flex-grow text-white'>PUSH</div>
                    </button>
                  </div>
                </form>
              </div>
            </section>
            {/* Copy URL */}
            <section className='max-w-xs p-2 py-5 mx-auto text-center sm:p-4'>
              <button className='w-full p-2 border active:scale-90 sm:px-8 bg-blue-200/30 rounded-3xl border-cool-grey'>
                <span className='space-x-5 text-center sm:flex sm:justify-between sm:items-center'>
                  <div className='p-2 break-words'>
                    http://localhost:5000/{shortenedUrl}
                  </div>
                  <Copy className='inline-block h-6 fill-white' />
                </span>
              </button>
            </section>
          </div>
        </section>

        <section className='px-2 sm:px-4'>
          <footer className='pt-20 mx-auto text-xl max-w-7xl sm:text-2xl '>
            <nav>
              <ul className='flex flex-wrap justify-center xs:space-x-3 '>
                <li className='p-2'>
                  <a href='#'>
                    <span className='text-white'>Github</span>
                  </a>
                </li>
                <li className='p-2'>
                  <a href='#'>
                    <span className='text-white'>Contact Us</span>
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </section>
        <span className='absolute scale-150 bg-transparent border rounded-full w-60 h-60 top-10 -right-10 border-cool-grey/10'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 right-44 top-48'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 left-44 top-72'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 left-60 bottom-44'></span>
        <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 right-60 bottom-32'></span>
      </div>
    </main>
  );
}

export default App;
