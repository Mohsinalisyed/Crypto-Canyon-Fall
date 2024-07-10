import React from 'react';
import Navbar from '../components/Navbar';
import MainSlider from '../components/MainSlider';
import MainFooter from '../components/MainFooter';
import { User } from '../utlis';
interface Iprops {
  userData: User[]
}

const Home: React.FC<Iprops> = ({ userData }) => {
  
  
  return (
    <React.Fragment>
      <Navbar />
      <MainSlider userData={userData} />
      <MainFooter/>
    </React.Fragment>
  );
};

export default Home;
