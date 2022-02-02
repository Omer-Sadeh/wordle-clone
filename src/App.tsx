import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard/Keyboard';

function App() {

  const KeyboardTiles = {
    Row1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    Row2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    Row3: ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
  };

  return (
    <div className="App">
      <div className="game-wrapper">
        <Header />
        <Board />
        <Keyboard row1={KeyboardTiles.Row1} row2={KeyboardTiles.Row2} row3={KeyboardTiles.Row3} />
      </div>
    </div>
  );
}

export default App;
