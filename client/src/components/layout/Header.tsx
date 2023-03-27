import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='w-full pt-8'>
      <div className='px-2 sm:px-4 max-w-7xl'>
        <h1 className='text-3xl font-semibold break-words'>
          <Link to='/'>Purlto</Link>
        </h1>
      </div>
    </section>
  );
};

export default Header;
