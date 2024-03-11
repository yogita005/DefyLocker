import React from 'react';

const FileUpload = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/rwC0Ydc1/tt.jpg')" }}>
        
        <div className="absolute inset-0 bg-gray-200 opacity-50"></div> 
      </div>
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-lg z-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Upload your file</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-lg shadow-sm -space-y-px">
            <div>
              <label htmlFor="file-upload" className="sr-only rounded-lg bg-indigo-600 hover:bg-indigo-700 ">Choooose File</label>
              <input id="file-upload" name="file-upload" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Choose File" />
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
