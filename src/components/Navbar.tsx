import React from 'react';
import { Link } from 'react-router';
import { CandyCane } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='sticky w-full top-0 left-0 h-16 bg-red-500 flex justify-center drop-shadow-xl'>
      <div className='font-luckiest-guy text-5xl text-white mt-auto'>
        <Link to="/" className=''>
          Advent Designs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;