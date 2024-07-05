import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TonGames from './views/TonGames';
import Home from './views/Home';
import ViewGame from './views/ViewGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tongames" element={<TonGames />} />
        <Route path="/viewgame" element={<ViewGame />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
