import axios from 'axios';
import { ShortenedLink } from './models/ShortenedLink';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
});

export class Api {
  static async shortenUrl(url: string): Promise<ShortenedLink> {
    const response = await axiosInstance.post('shorten', {
      longUrl: url,
    });

    return response.data as ShortenedLink;
  }
}
