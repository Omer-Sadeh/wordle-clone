import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard/Keyboard';

function App() {

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
    var newTries = {...Tries};
    switch(Attempt) {
      case 1: newTries.try1[LetterNum] = value;
        break;
      case 2: newTries.try2[LetterNum] = value;
        break;
      case 3: newTries.try3[LetterNum] = value;
        break;
      case 4: newTries.try4[LetterNum] = value;
        break;
      case 5: newTries.try5[LetterNum] = value;
        break;
      case 6: newTries.try6[LetterNum] = value;
        break;
    }
    if (LetterNum < 4) setLetterNum(LetterNum + 1);
    else {
      setLetterNum(0);
      if (Attempt === 6) alert("end"); // --------- GAME END CONDITION ---------
      else setAttempt(Attempt + 1);
    }
    setTries(newTries);
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
