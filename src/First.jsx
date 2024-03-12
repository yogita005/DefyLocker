import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { Link } from 'react-router-dom';
function First() {
  return (
    <div>
      <Navbar />
      <Hero />
    
      <Search />
      <div className="flex justify-center items-center mt-[20px] mb-[20px]">
        <Link
            to="/Second"
            className="hover:scale-110 transition duration-300 ease-in-out mt-[100px] mb-[100px]w-fit bg-blue-600 text-white rounded-full px-6 py-3 text-lg md:text-2xl font-semibold">
            Start Uploading!
        </Link>
</div>
      <Footer />
    </div>
  );
}

export default First;