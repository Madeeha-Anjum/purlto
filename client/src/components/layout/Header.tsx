import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='pt-5'>
      <h1 className='text-3xl font-semibold'>
        <Link to='/'>Purlto</Link>
      </h1>
    </section>
  );
};

export default Header;
