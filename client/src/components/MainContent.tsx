import { useState } from 'react';
import { ShortenedLink } from '../models/ShortenedLink';
import ShortenedLinksList from './ShortenLink/ShortenedLinksList';
import ShortenLinkForm2 from './ShortenLink/ShortenLinkForm2';
import Title from './ui/Title';

const MainContent: React.FC = () => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);

  const addShortenedLink = (shortenedLink: ShortenedLink) => {
    setShortenedLinks((prev) => [shortenedLink, ...prev]);
  };

  return (
    <>
      <div className='mt-[20%]'>
        <Title>Purlto</Title>
        <ShortenLinkForm2 addShortenedLink={addShortenedLink} />
        <ShortenedLinksList shortenedLinks={shortenedLinks} />
      </div>
    </>
  );
};

export default MainContent;
