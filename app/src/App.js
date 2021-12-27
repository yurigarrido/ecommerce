import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStorage } from './context/GlobalContext';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GlobalStorage>
    </>
  );
}

export default App;
