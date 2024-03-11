import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>DEFYLOCKER</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='text-right lg:flex'>
          <li>About</li>
          <li>More info</li>
          <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
