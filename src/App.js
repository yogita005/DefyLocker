import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './First'; 
import Second from './Second'; 
import Third from './Third';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;