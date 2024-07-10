import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TonGames from './views/TonGames';
import Home from './views/Home';
import ViewGame from './views/ViewGame';
import { useGameData } from './utlis';

function App() {
  const { data: gameData } = useGameData();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home gameData={gameData } />} />
        <Route path="/tongames" element={<TonGames gameData={gameData } />} />
        <Route path="/viewgame" element={<ViewGame />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
