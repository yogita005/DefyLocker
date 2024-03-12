import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="flex bg-white">
      <div className="w-64 bg-white">
        <nav>
          <ul className="p-2 mt-[50px]">
          <li>
              <Link to="/Second" className="text-black hover:bg-gray-100 py-2 px-4 block">
                Upload documents
              </Link>
            </li>
            <li>
              <Link to="/Third" className="text-black hover:bg-gray-100 py-2 px-4 block">
                Issued documents
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:bg-gray-100 py-2 px-4 block">
                About DefyLocker
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-screen max-w-[700px]">
      <div className="rounded-lg bg-gray-100 p-6 shadow-lg flex flex-col items-center ml-[350px]">
  <input
    type="text"
    placeholder="Enter Address"
    className="address outline-none border-none bg-transparent placeholder-gray-500 mb-4 text-lg"
  />
  <button className="center button bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
    Get Data
  </button>
</div>

</div>

</div>

    </div>
  );
};

export default Card;
