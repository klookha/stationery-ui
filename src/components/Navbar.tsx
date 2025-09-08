import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 shadow-md bg-blue-300'>
      <div className='text-xl font-bold'>KedarStationery</div>
      <input
        type='text'
        placeholder='Search for products...'
        className='border rounded px-3 py-1 w-1/3'
      />
      <div className='flex items-center space-x-4'>
        <a href='/login'>Login</a>
        <a href='/cart'>Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;