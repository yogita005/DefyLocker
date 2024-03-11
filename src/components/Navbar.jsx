import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>DEFYLOCKER</h1>
      </div>
      <ul className='hidden md:flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Second">Upload</Link></li>
        <li>Issued</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>DEFYLOCKER</h1>
          <li className='border-b'><Link to="/First">Home</Link></li>
          <li className='border-b'><Link to="/Second">Upload</Link></li>
          <li className='border-b'>Issued</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
      
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
