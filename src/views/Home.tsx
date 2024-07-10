import React from 'react';
import Navbar from '../components/Navbar';
import MainSlider from '../components/MainSlider';
import MainFooter from '../components/MainFooter';
interface Iprops {
  userData: any
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
