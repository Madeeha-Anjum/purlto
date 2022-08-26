type Props = {};

const Footer = (props: Props) => {
  return (
    <section className='px-2 sm:px-4'>
      <footer className='pt-20 mx-auto text-xl max-w-7xl sm:text-2xl '>
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
    </section>
  );
};

export default Footer;
