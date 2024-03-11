import React, { useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  const scrollToLocation = () => {
    window.scrollBy({
      top: window.innerHeight / 2, 
      behavior: 'smooth' 
    });
  };

  return (
    <div className='w-full h-screen relative'>
      <img
        className='w-full h-full object-cover'
        src="https://i.postimg.cc/rwC0Ydc1/tt.jpg"
        alt="Background"
      />
      <div className='absolute w-full h-full top-0 left-0'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-black p-4'>
        <h1 className='font-2xl'>Secure. Decentralized. Efficient.</h1>
        <div className="flex justify-center items-center mt-[20px]">
          <button
            onClick={scrollToLocation}
            className="hover:scale-110 transition duration-300 ease-in-out w-fit bg-sky-700 text-white rounded-full px-6 py-3 text-lg md:text-2xl font-semibold"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
