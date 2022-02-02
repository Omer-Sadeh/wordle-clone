import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard/Keyboard';

function App() {

  const THEWORD = "BOATS"
  const [Tries, setTries] = useState(
    {
      try1: Array(5).fill(null),
      try2: Array(5).fill(null),
      try3: Array(5).fill(null),
      try4: Array(5).fill(null),
      try5: Array(5).fill(null),
      try6: Array(5).fill(null)
    }
  );
  const [Attempt, setAttempt] = useState(1);
  const [LetterNum, setLetterNum] = useState(0);

  const KeyboardTiles = {
    Row1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    Row2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    Row3: ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
  };

  const keyboarPress = (value:String) => {
    switch(value) {
      case "DEL": if (LetterNum > 0 && Attempt < 7) updateBoard(null, false);
        break;
      case "ENTER": checkAttempt();
        break;
      default: if(LetterNum < 5 && Attempt < 7) updateBoard(value, true);
        break;
    }
  }

  const updateBoard = (value:any, next:boolean) => {
    var newTries = {...Tries};
    var index = LetterNum;
    if(!next) index--;
    switch(Attempt) {
      case 1: newTries.try1[index] = value;
        break;
      case 2: newTries.try2[index] = value;
        break;
      case 3: newTries.try3[index] = value;
        break;
      case 4: newTries.try4[index] = value;
        break;
      case 5: newTries.try5[index] = value;
        break;
      case 6: newTries.try6[index] = value;
        break;
    }
    if(next) index++;
    setLetterNum(index);
    setTries(newTries);
  }

  const checkAttempt = () => {
    if(Attempt < 7 && LetterNum === 5) {
      setAttempt(Attempt + 1);
      setLetterNum(0);
    }
  }

  return (
    <div className="App">
      <div className="game-wrapper">
        <Header />
        <Board words={Tries} />
        <Keyboard row1={KeyboardTiles.Row1} row2={KeyboardTiles.Row2} row3={KeyboardTiles.Row3} press={keyboarPress}/>
      </div>
    </div>
  );
}

export default App;
