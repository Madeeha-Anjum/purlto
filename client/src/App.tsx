import { useState } from 'react';
import axios from 'axios';

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
        <div className='px-2 my-auto sm:px-4'>
          {/* Shorten URL */}
          <div className='mx-auto max-w-7xl'>
            <h1 className='text-center text-site-name'>Pushto.site</h1>

            <div className='sm:px-28'>
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
          </div>
          {/* Copy URL */}
          <div className=''>
            <span>{`http://localhost:5000/${shortenedUrl}`}</span>
          </div>
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
