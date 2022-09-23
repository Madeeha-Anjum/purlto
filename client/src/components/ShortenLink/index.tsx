import React, { useState } from 'react';
import ShortenLinkCopyBtn from './ShortenLinkCopyBtn';
import ShortenLinkForm from './ShortenLinkForm';
import axios from 'axios';

function index() {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [showCopyBtn, setShowCopyBtn] = useState(false);

  const delay = (time: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        return resolve();
      }, time);
    });
  };

  const onSubmit = async (userInputUrl: string) => {
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}api/v1/shorten`, {
        url: userInputUrl,
      })
      .then((res) => {
        console.log('res', res);
        setShortenedUrl(`${import.meta.env.VITE_BACKEND_URL}${res.data.slug}`);
      });
    // the catch is taken care of inside the ShortenLinkForm component

    await delay(2500);
    setShowCopyBtn(true);
  };

  return (
    <>
      <section className='mx-auto max-w-7xl'>
        <div className='sm:px-28'>
          <ShortenLinkForm onSubmit={onSubmit} />
          <ShortenLinkCopyBtn shortenedUrl={shortenedUrl} show={showCopyBtn} />
        </div>
      </section>
    </>
  );
}

export default index;
