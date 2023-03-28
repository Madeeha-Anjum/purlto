import GlassContainer from '../ui/GlassContainer';
import { AwesomeButton } from 'react-awesome-button';
import './awesome-button.css';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import PusherContainer from '../pusher/PusherContainer';
import PusherReactor from '../pusher/PusherReactor';
import Pusher from '../pusher/Pusher';
import { useEffect, useState } from 'react';
import { Api } from '../../api';
import { ShortenedLink } from '../../models/ShortenedLink';
import classNames from 'classnames';
import toast from 'react-hot-toast';

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

interface ShortenLinkForm2Props {
  addShortenedLink: (shortenedLink: ShortenedLink) => void;
}

const ShortenLinkForm2: React.FC<ShortenLinkForm2Props> = (props) => {
  const [activatePusher, setActivatePusher] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userInput, setUserInput] = useState('');
  const [userInputTouched, setUserInputTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error Invalid URL');

  useEffect(() => {
    const errors = validate(userInput);
    setErrorMessage(errors.userInput);
  }, [userInput, userInputTouched]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

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

      setActivatePusher(true);
      await sleep(pushAnimationDuration);
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
      <div className='max-w-6xl mx-auto'>
        <PusherContainer>
          <PusherReactor activate={activatePusher}>
            <GlassContainer focusable>
              <div className=''>
                <div>
                  <input
                    type='text'
                    className='w-full bg-transparent outline-0 p-3'
                    placeholder='http://google.com'
                    value={userInput}
                    onChange={onInputChange}
                    onBlur={() => setUserInputTouched(true)}
                  />
                </div>
              </div>
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

interface ErrorMessageProps {
  showMessage?: boolean;
  message: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  return (
    <div
      className={classNames(
        'mt-2 text-[#56A44C] font-bold flex items-center opacity-1',
        {
          'opacity-0': !props.showMessage,
        }
      )}
    >
      <ChevronRightIcon className='mr-1' />
      {props.message}
    </div>
  );
};

interface ShortenLinkButton {
  onSubmit: () => void;
  onReset: () => void;
  isLoading?: boolean;
  showReset?: boolean;
}

const ShortenLinkButton: React.FC<ShortenLinkButton> = (props) => {
  if (props.isLoading) {
    return (
      <AwesomeButton type='primary' disabled>
        Loading...
      </AwesomeButton>
    );
  }

  if (!props.isLoading && props.showReset) {
    return (
      <AwesomeButton onPress={props.onReset} type='primary'>
        Do Another One!
      </AwesomeButton>
    );
  }

  return (
    <AwesomeButton onPress={props.onSubmit} type='primary'>
      Shorten Link
    </AwesomeButton>
  );
};

export default ShortenLinkForm2;
