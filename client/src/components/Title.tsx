import React from 'react';

type Props = {};

function Title({}: Props) {
  return (
    <section className='mx-auto max-w-7xl'>
      <div className='sm:px-28'>
        <h1 className='mb-10 text-center break-words text-site-name'>
          Pushto.site
        </h1>
      </div>
    </section>
  );
}

export default Title;
