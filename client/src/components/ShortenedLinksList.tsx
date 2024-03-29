import toast from 'react-hot-toast';
import { ShortenedLink } from '../models/ShortenedLink';
import ChevronRightIcon from './icons/ChevronRightIcon';
import CopyIcon from './icons/CopyIcon';
import GlassContainer from './ui/GlassContainer';

interface ShortenedLinksListProps {
  shortenedLinks: ShortenedLink[];
}

const ShortenedLinksList: React.FC<ShortenedLinksListProps> = (props) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${text}`);
  };

  return (
    <div className='mt-10'>
      {props.shortenedLinks.map((shortenedLink) => (
        <div
          key={shortenedLink.slug}
          className='max-w-md mx-auto mt-3 animate-reveal'
        >
          <GlassContainer
            clickable
            onClick={() =>
              copyToClipboard(`${window.location.href}${shortenedLink.slug}`)
            }
          >
            <div className='px-5 py-5 text-white relative'>
              <div className='flex items-center underline'>
                <ChevronRightIcon className='mr-1 text-white' />
                {window.location.href}
                {shortenedLink.slug}
              </div>
              <div className='whitespace-nowrap text-sm text-ellipsis overflow-hidden mt-3'>
                {shortenedLink.longUrl}
              </div>
              <div className='absolute top-0 right-0 p-5'>
                <CopyIcon className='w-5 h-5' />
              </div>
            </div>
          </GlassContainer>
        </div>
      ))}
    </div>
  );
};

export default ShortenedLinksList;
