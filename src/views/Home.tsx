import React from 'react';
import Navbar from '../components/Navbar';
import MainSlider from '../components/MainSlider';
import MainFooter from '../components/MainFooter';
import { GameArray } from '../utlis';
interface Iprops {
  gameData: GameArray
}

const Home: React.FC<Iprops> = ({ gameData }) => {
  
  
  return (
    <React.Fragment>
      <Navbar />
      <MainSlider gameData={gameData } />
      <MainFooter/>
    </React.Fragment>
  );
};

export default Home;
