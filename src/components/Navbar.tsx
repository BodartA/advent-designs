import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='fixed w-full top-0 left-0 h-12 sm:h-16 bg-red-500 flex justify-center drop-shadow-xl z-10 items-center'>
      <Link to="/" className='font-berkshire-swash text-3xl sm:text-5xl text-white'>
        Advent Designs
      </Link>
    </div>
  );
};

export default Navbar;