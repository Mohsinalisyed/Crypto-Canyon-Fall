import React from 'react';
import Navbar from '../components/Navbar';
import MainSlider from '../components/MainSlider';
import MainFooter from '../components/MainFooter';


const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MainSlider />
      <MainFooter/>
    </React.Fragment>
  );
};

export default Home;
