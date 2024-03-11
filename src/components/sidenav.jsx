import React from 'react';
import FileUpload from './FileUpload';
const SideNavBar = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white">
       
        <nav>
          <ul className="p-2 mt-[50px]">
            <li>
              <a href="#" className="text-black hover:bg-gray-100 py-2 px-4 block">
                Issued documents
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:bg-gray-100 py-2 px-4 block">
                Fetch Documents
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:bg-gray-100 py-2 px-4 block">
                About DefyLocker
              </a>
            </li>
          </ul>
        </nav>
      </div>
     
      <div className="flex-1">
        <div className="p-4">
          <FileUpload/>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;