import { useState } from 'react';
import axios from 'axios';
import Copy from './components/icons/Copy';

function App() {
  const [userInput, setUserInput] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userInput);
    axios
      .post('http://localhost:5000/api/v1/shorten', {
        url: userInput,
      })
      .then((res) => {
        setShortenedUrl(res.data.slug);
      });
    setUserInput('');
  };

  return (
    <main className='flex flex-col items-center min-h-screen bg-gradient-to-bl to-indigo from-steel-blue'>
      <section className='w-full pt-8'>
        <div className='px-2 sm:px-4 max-w-7xl'>
          <h1 className='text-3xl font-semibold break-words'>Pushto.site</h1>
        </div>
      </section>

      <section className='flex flex-col flex-1 w-full'>
        <div className='relative px-2 my-auto sm:px-4'>
          {/* Shorten URL */}
          <section className='mx-auto max-w-7xl'>
            <div className='sm:px-28'>
              <h1 className='text-center break-words text-site-name'>
                Pushto.site
              </h1>

              <form className='sm:flex ' onSubmit={onSubmit}>
                <input
                  className='w-full text-black '
                  type='text'
                  placeholder='Paste your URL'
                  onChange={onInputChange}
                  value={userInput}
                />
                <button className='w-full bg-green-300 border-green-200 sm:w-2/12 '>
                  <span className='text-white '>PUSH</span>
                </button>
              </form>
            </div>
          </section>
          {/* Copy URL */}
          <section className='absolute left-0 right-0 max-w-xs p-2 mx-auto text-center -bottom-40 sm:p-4'>
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
    </main>
  );
}

export default App;
