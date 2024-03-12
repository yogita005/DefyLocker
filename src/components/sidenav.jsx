import React from 'react';
import FileUpload from './FileUpload';
import { Link } from 'react-router-dom';
const SideNavBar = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white">
       
        <nav>
          <ul className="p-2 mt-[50px]">
          <li>
              <a href="#" className="text-black hover:bg-gray-100 py-2 px-4 block"><Link to="/Second" >
                Upload Documents</Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:bg-gray-100 py-2 px-4 block"><Link to="/Third" >Issued documents
              </Link>  
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