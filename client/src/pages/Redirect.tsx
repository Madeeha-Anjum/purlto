import axios, { AxiosError } from 'axios';
import React from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';

async function getLongUrl(slugId: string) {
  console.log(`slugId: '${slugId}'`);
  // sent query to backend to see if slug exists

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/${slugId}`
    );

    return response.data.longUrl;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return null;
      }
    }

    throw new Error('Unable to get long url from slug');
  }
}

export function loader({ params }: any) {
  return getLongUrl(params.slug);
}

const Redirect = () => {
  const longUrl = useLoaderData();

  console.log(`longUrl: '${longUrl}'`);

  if (typeof longUrl === 'string') {
    window.location.assign(longUrl);
    return <></>;
  } else {
    return <Navigate to={'/404'} />;
  }
};

export default Redirect;
