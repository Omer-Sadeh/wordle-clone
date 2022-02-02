import React from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <div className="game-wrapper">
        <Header />
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
