import React from 'react';
import classnames from 'classnames';
import CopyIcon from '../icons/CopyIcon';

type Props = {
  show: boolean;
  shortenedUrl: string;
};

function ShortenLinkCopyBtn({ show, shortenedUrl }: Props) {
  return (
    <section
      className={classnames(
        { 'opacity-0': !show },
        'max-w-xs p-2 py-5 mx-auto text-center sm:p-4 mt-5 opacity-100 transition duration-300 ease-in-out	'
      )}
    >
      <button className='w-full p-2 transition border active:scale-90 sm:px-8 bg-blue-200/30 rounded-xl bg-black/10 backdrop-opacity-40 backdrop-blur-3xl backdrop-brightness-200 border-cool-grey/20'>
        <div className='flex items-center space-x-1 text-center'>
          <div className='w-full p-2 break-words'>{shortenedUrl}</div>
          <CopyIcon className='w-5 fill-white' />
        </div>
      </button>
    </section>
  );
}

export default ShortenLinkCopyBtn;
