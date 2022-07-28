import React, { useState } from 'react';
const defaultFormData = {
  firstName: '',
  lastName: '',
};

const Form = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const { firstName, lastName } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    setFormData(defaultFormData);
  };

  return (
    <>
      <section className='max-w-xl mx-auto'>
        <form onSubmit={onSubmit}>
          <div className='flex flex-wrap -mx-3'>
            <div className='w-full px-3'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase'
                htmlFor='firstName'
              >
                First Name
              </label>
              <input
                className='block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
                id='firstName'
                type='text'
                placeholder='Jane'
                value={firstName}
                onChange={onChange}
              />
            </div>
            {/* note: html for label matches if of input */}
            <div className='w-full px-3'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase'
                htmlFor='lastName'
                id='lastName'
              >
                Last Name
              </label>
              <input
                className='block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border border-gray-900 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
                id='lastName'
                type='text'
                placeholder='Doe'
                value={lastName}
                onChange={onChange}
              />
            </div>
          </div>
          <button
            type='submit'
            className='p-2 font-bold text-black bg-green-200 border border-black shadow-lg '
          >
            Submit{' '}
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
