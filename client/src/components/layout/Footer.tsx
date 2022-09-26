import { Link } from 'react-router-dom';
import ExternalLink from '../icons/ExternalLink';

const Footer = () => {
  return (
    <section className='px-2 sm:px-4'>
      <footer className='pt-20 mx-auto text-xl max-w-7xl sm:text-2xl '>
        <nav>
          <ul className='flex flex-wrap justify-center xs:space-x-3 '>
            <li className='p-2 hover:opacity-90'>
              <a
                target='_blank'
                href='https://github.com/Madeeha-Anjum/pushtosite'
              >
                <div className='flex items-center space-x-1 '>
                  <span className='text-white '>Github</span>
                  <span>
                    <ExternalLink />
                  </span>
                </div>
              </a>
            </li>
            <li className='p-2 hover:opacity-90'>
              <Link to='/feedback'>Feedback</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
