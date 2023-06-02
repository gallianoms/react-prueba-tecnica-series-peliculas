import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-700'>
      <ul className='flex justify-center space-x-4 py-4'>
        <li>
          <a href='/' className='text-white hover:text-slate-300 '>
            home
          </a>
        </li>
        <li>
          <a href='/series' className='text-white hover:text-slate-300'>
            series
          </a>
        </li>
        <li>
          <a href='/movies' className='text-white hover:text-slate-300'>
            movies
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
