import React, { useState } from 'react';
import classnames from 'classnames';

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
  // if it is, return "Required" as an error
  if (url === '') {
    return 'Required';
  }

  // check if url is a valid url
  // if it is not, return "Invalid URL" as an error
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
    requestAnimationFrame(() => {
      setShowAnimation(true);
    });

    setShowAnimation(false);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate(userInput)) {
      setError(validate(userInput));
      return;
    }

    setIsLoading(true);
    try {
      await props.onSubmit(userInput);
      restartAnimation();
      // clear the input
      setUserInput('');
    } catch (err) {
      // don't clear the input
      // Catch the error from the onSubmit function in the parent component
      console.log('err', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
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
        {error && (
          <div className='text-red-500 text-lg font-bold mt-1 animate-pulse'>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default ShortenLinkForm;
