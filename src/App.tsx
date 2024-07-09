import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TonGames from './views/TonGames';
import Home from './views/Home';
import ViewGame from './views/ViewGame';
import CryptoCanyon from './views/CryptoCanyon';
import { useGameData } from './utlis/api';

function App() {
  const { data: gameData } = useGameData();
  console.log(gameData, 'gameData ')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tongames" element={<TonGames />} />
        <Route path="/viewgame" element={<ViewGame />} />
        <Route path="/crypto-canyon" element={<CryptoCanyon/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
