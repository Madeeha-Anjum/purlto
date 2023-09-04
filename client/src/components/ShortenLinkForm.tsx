import GlassContainer from './ui/GlassContainer';

import ChevronRightIcon from './icons/ChevronRightIcon';
import PusherContainer from './pusher/PusherContainer';
import PusherReactor from './pusher/PusherReactor';
import Pusher from './pusher/Pusher';
import { useEffect, useState } from 'react';
import { Api } from '../api';
import { ShortenedLink } from '../models/ShortenedLink';
import classNames from 'classnames';
import toast from 'react-hot-toast';
import ShortenLinkButton from './ShortenLinkForm/ShortenLinkButton';
import ErrorMessage from './ShortenLinkForm/ErrorMessage';

const pushAnimationDuration = 2000;

const sleep = (ms: number) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

const isValidUrl = (userInput: string) => {
  try {
    new URL(userInput);
    return true;
  } catch (error) {
    return false;
  }
};

const validate = (userInput: string) => {
  const errors = {
    userInput: '',
  };

  if (userInput.length === 0) {
    errors.userInput = 'Error: Please Enter a URL';
  } else if (!isValidUrl(userInput)) {
    errors.userInput = 'Error: Invalid URL';
  }

  return errors;
};

interface ShortenLinkFormProps {
  addShortenedLink: (shortenedLink: ShortenedLink) => void;
}

const ShortenLinkForm: React.FC<ShortenLinkFormProps> = (props) => {
  const [activatePusher, setActivatePusher] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userInput, setUserInput] = useState('');
  const [userInputTouched, setUserInputTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error Invalid URL');

  useEffect(() => {
    const errors = validate(userInput);
    setErrorMessage(errors.userInput);
  }, [userInput, userInputTouched]);

  const onSubmit = async () => {
    setUserInputTouched(true);

    if (validate(userInput).userInput) {
      return;
    }

    setIsLoading(true);
    try {
      // send request
      const response = await Api.shortenUrl(userInput);
      console.log('response:', response);

      // activate push animation
      setActivatePusher(true);
      await sleep(pushAnimationDuration);

      // show new shortened link
      props.addShortenedLink(response);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong, please try again');
    } finally {
      setIsLoading(false);
    }
  };

  const onReset = () => {
    setActivatePusher(false);
    setUserInput('');
    setUserInputTouched(false);
  };

  return (
    <>
      <div className='w-full'>
        <PusherContainer>
          <PusherReactor activate={activatePusher}>
            <GlassContainer focusable>
              <input
                type='text'
                className='w-full bg-transparent outline-0 p-3'
                placeholder='http://google.com'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onBlur={() => setUserInputTouched(true)}
              />
            </GlassContainer>
          </PusherReactor>
          <Pusher activate={activatePusher} />
        </PusherContainer>
        <ErrorMessage
          showMessage={Boolean(errorMessage && userInputTouched)}
          message={errorMessage}
        />
      </div>

      <div className='mt-5 text-center'>
        <ShortenLinkButton
          onSubmit={onSubmit}
          onReset={onReset}
          isLoading={isLoading}
          showReset={activatePusher}
        />
      </div>
    </>
  );
};

export default ShortenLinkForm;
