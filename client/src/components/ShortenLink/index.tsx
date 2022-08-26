import React, { useState } from 'react';
import classnames from 'classnames';
import ShortenLinkCopyBtn from './ShortenLinkCopyBtn';
type Props = {};

function index({}: Props) {
  const [shortenedUrl, setShortenedUrl] = useState('');

  const [userInput, setUserInput] = useState('');
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
    setShortenedUrl('');
    setIsLoading(true);

    await delay(1000);
    setIsLoading(false);

    restartAnimation();
    setShortenedUrl('ascsa');
  };

  const restartAnimation = () => {
    requestAnimationFrame(() => {
      setShowAnimation(true);
    });

    setShowAnimation(false);
  };

  return (
    <>
      <section className='mx-auto max-w-7xl'>
        <div className='sm:px-28'>
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
                  `w-1/4 transition-all duration-1000 flex items-center m-1 shadow-inner bg-gradient-to-r from-[#7be5c9] via-[#7ec5bb] to-[#0e9c97] rounded-xl sm:px-8 text-center`
                )}
              >
                {isLoading && (
                  <div className='scale-50 sm:-ml-4'>
                    <span className='loader'></span>
                  </div>
                )}
                <div className='flex-grow text-white'>PUSH</div>
              </button>
            </div>
          </form>
          <ShortenLinkCopyBtn shortenedUrl={shortenedUrl} show={true} />
        </div>
      </section>
      {/* Copy URL */}
    </>
  );
}

export default index;
