import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section>
      <h1 className='text-3xl font-semibold mt-2'>
        <Link to='/'>Purlto</Link>
      </h1>
    </section>
  );
};

export default Header;
