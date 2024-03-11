import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './First'; // Import your first page component
import Second from './Second'; // Import your second page component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;