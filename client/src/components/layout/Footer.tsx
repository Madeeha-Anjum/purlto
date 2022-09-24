import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='px-2 sm:px-4'>
      <footer className='pt-20 mx-auto text-xl max-w-7xl sm:text-2xl '>
        <nav>
          <ul className='flex flex-wrap justify-center xs:space-x-3 '>
            <li className='p-2'>
              <a
                target='_blank'
                href='https://github.com/Madeeha-Anjum/pushtosite'
              >
                <span className='text-white'>Github</span>
              </a>
            </li>
            <li className='p-2'>
              <Link to='/Feedback'>Feedback</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
