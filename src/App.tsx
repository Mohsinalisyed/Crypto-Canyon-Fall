import React from 'react';
import './App.css';
import Main from './components/Main';
import Slider from './components/Slider';
import ContentSection from './components/ContentSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <Main />
      <Slider />
      <ContentSection />
      <FooterSection/>
    </div>
  );
}

export default App;
