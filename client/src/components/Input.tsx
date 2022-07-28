import axios from 'axios';
import React, { useState } from 'react';

function Input() {
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

    // Error Check
    // call the API
    // display it on the page
    // Clear input
  };

  return (
    <>
      {/*  */}
      <div className=''>
        <h1 className='text-center text-site-name'>Pushto.site</h1>
      </div>
      {/*  */}
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
        {/*  */}
        <div>{`http://localhost:5000/${shortenedUrl}`}</div>
      </div>
    </>
  );
}

export default Input;
