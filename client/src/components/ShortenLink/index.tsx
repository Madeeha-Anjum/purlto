import { useState } from 'react';
import { Sleep } from '../../utils';
import ShortenLinkCopyBtn from './ShortenLinkCopyBtn';
import ShortenLinkForm from './ShortenLinkForm';
import axios from 'axios';
import PageSection from '../ui/PageSection';

function index() {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [showCopyBtn, setShowCopyBtn] = useState(false);

  const onSubmit = async (userInputUrl: string) => {
    /*
      This function is called by the child component when the user submits the form
    */

    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/shorten`, {
        longUrl: userInputUrl,
      })
      .then((res) => {
        setShortenedUrl(`${window.location.href}${res.data.slug}`);
      });
    // the catch is taken care of inside the child component
    await Sleep(500);
    setShowCopyBtn(true);
  };

  return (
    <>
      <PageSection>
        <ShortenLinkForm onSubmit={onSubmit} hideCopy={setShowCopyBtn} />
        <ShortenLinkCopyBtn shortenedUrl={shortenedUrl} show={showCopyBtn} />
      </PageSection>
    </>
  );
}

export default index;
