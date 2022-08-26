import React, { useState } from 'react';
import classnames from 'classnames';
import ShortenLinkCopyBtn from './ShortenLinkCopyBtn';
import ShortenLinkForm from './ShortenLinkForm';
type Props = {};

function index({}: Props) {
  const [shortenedUrl, setShortenedUrl] = useState('');

  const delay = (time: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        return resolve();
      }, time);
    });
  };

  const onSubmit = async (userInputUrl: string) => {
    setShortenedUrl('');
    // Call API to get shortened url
    await delay(1000);

    setShortenedUrl('ascsa');
  };

  return (
    <>
      <section className='mx-auto max-w-7xl'>
        <div className='sm:px-28'>
          <ShortenLinkForm onSubmit={onSubmit} />
          <ShortenLinkCopyBtn shortenedUrl={shortenedUrl} show={true} />
        </div>
      </section>
    </>
  );
}

export default index;
