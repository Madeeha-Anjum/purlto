import { Link } from 'react-router-dom';
import ExternalLink from '../icons/ExternalLink';
import GlassContainer from '../ui/GlassContainer';

const Footer = () => {
  return (
    <>
      <footer className='py-2'>
        <nav className=''>
          <ul className='flex justify-between items-center'>
            <li className='flex-1'></li>
            <li className='flex-1'>
              <a
                target='_blank'
                href='https://github.com/Madeeha-Anjum/purlto'
                className='hover:opacity-80 transition'
              >
                <div className='flex justify-center outline-0'>
                  <div className='text-white text-lg'>Github</div>
                  <ExternalLink />
                </div>
              </a>
            </li>
            <li className='flex-1'>
              <div className='flex justify-end outline-none'>
                <a
                  href='https://www.viviantrinh.ca'
                  target='_blank'
                  className='transition'
                >
                  <GlassContainer clickable>
                    <div className='flex p-3'>
                      <span className='text-white text-sm'>
                        Design by Vivian Trinh
                      </span>

                      <ExternalLink />
                    </div>
                  </GlassContainer>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
