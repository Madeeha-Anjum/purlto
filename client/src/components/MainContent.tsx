import { useState } from 'react';
// @ts-ignore: No Implicit Any - This is a js file
import useLocalStorage from '../hooks/useLocalStorage';
import { ShortenedLink } from '../models/ShortenedLink';
import ShortenedLinksList from './ShortenedLinksList';
import ShortenLinkForm from './ShortenLinkForm';
import Title from './ui/Title';

const MainContent: React.FC = () => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);

  const addShortenedLink = (shortenedLink: ShortenedLink) => {
    setShortenedLinks((prev: ShortenedLink[]) => [shortenedLink, ...prev]);
  };

  return (
    <>
      <div className='mt-[15%]'>
        <Title>Purlto</Title>
        <ShortenLinkForm addShortenedLink={addShortenedLink} />
        <ShortenedLinksList shortenedLinks={shortenedLinks} />
      </div>
    </>
  );
};

export default MainContent;
