import React from 'react';
import {slideInDown} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import logo from './img/logo.png';
import Carrot from './img/Carrot.png';
import Lettuce from './img/Lettuce.png';
import Broccoli from './img/Broccoli.png';
import './App.css';

function App() {
  const SlideInDown = styled.div`animation 10s ${keyframes `${slideInDown}`} infinite`
  const SlideDown= styled.div`animation 20s ${keyframes `${slideInDown}`} infinite`
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={logo} alt="logo" width="300px" />
          </div>
          <div className="Sliders">
          <SlideInDown><img src={Carrot} alt="falling-carrot" width="250px" /></SlideInDown>
          <SlideDown><img src={Broccoli} alt="falling-broccoli" /></SlideDown>
          <SlideInDown><img src={Carrot} alt="falling-carrot" width="250px" /></SlideInDown>
          <SlideDown><img src={Lettuce} alt="falling-lettuce" /></SlideDown>
        </div>
        <h1>Giga Pet</h1>
        <p>The fun way to eat healthy!</p>
      </header>
    </div>
  );
}

export default App;
