import classnames from 'classnames';
import toast from 'react-hot-toast';

import Icon from '../icons';

type PropTypes = {
  show: boolean;
  shortenedUrl: string;
};

function ShortenLinkCopyBtn(props: PropTypes) {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortenedUrl);
    toast.success('Copied to clipboard!');
  };

  return (
    <section
      className={classnames(
        { invisible: !props.show },
        'max-w-md p-2 py-5 mx-auto text-center sm:p-4 mt-5 opacity-100 transition duration-300 ease-in-out'
      )}
    >
      <button
        onClick={handleCopy}
        className='w-full transition border active:scale-95 rounded-xl bg-black/10 backdrop-opacity-40 backdrop-blur-3xl backdrop-brightness-200 border-cool-grey/20'
      >
        <div className='flex items-center justify-between p-4 space-x-1 sm:px-8'>
          <span className='break-all'>{props.shortenedUrl}</span>
          <span>
            <Icon.CopyIcon />
          </span>
        </div>
      </button>
    </section>
  );
}

export default ShortenLinkCopyBtn;
