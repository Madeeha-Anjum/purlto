import React from 'react';

type PropsType = {
  className?: string;
};

const ExternalLink = (props: PropsType) => {
  return (
    <svg
      fill='#000000'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      className='w-5 h-5 fill-white'
      {...props}
    >
      <path d='M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z' />
    </svg>
  );
};

export default ExternalLink;