import React, { useState } from 'react';
import classnames from 'classnames';
import toast from 'react-hot-toast';

type Props = {
  onSubmit: (userInputUrl: string) => Promise<void>;
};

const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

const validate = (url: string) => {
  // check if url is an empty string
  if (url === '') {
    return 'Required';
  }
  // check if url is a valid url
  if (!isValidUrl(url)) {
    return 'Invalid URL';
  }
  return '';
};

function ShortenLinkForm(props: Props) {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(validate(e.target.value));
    setUserInput(e.target.value);
  };

  const restartAnimation = () => {
    // The requestAnimationFrame() tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.

    requestAnimationFrame(() => {
      //  **before the next frame** reset the animation
      setShowAnimation(true);
    });

    setShowAnimation(false);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validate the url
    if (validate(userInput)) {
      setError(validate(userInput));
      return;
    }

    try {
      setIsLoading(true);
      await props.onSubmit(userInput);

      restartAnimation();
      setUserInput('');
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div
          className={classnames(
            'flex border shadow-inner rounded-xl bg-black/10 backdrop-opacity-40 backdrop-blur-3xl backdrop-brightness-200 border-cool-grey/20'
          )}
        >
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
        {/* form errors */}
        <div className={classnames('flex-auto', { visible: !error })}>
          <div className='m-2 h-5 w-1/2 text-red-500 text-lg font-bold '>
            {error}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShortenLinkForm;
