import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TonGames from './views/TonGames';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ton" element={<TonGames />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
