import React from 'react';

const Footer = () => {
  return (
    <footer className=''>
      <nav>
        <ul className='flex flex-wrap justify-center xs:space-x-3 '>
          <li className='p-2'>
            <a href='#'>
              <span className='text-white'>Github</span>
            </a>
          </li>
          <li className='p-2'>
            <a href='#'>
              <span className='text-white'>Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
