import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard/Keyboard';

function App() {

  const THEWORD = "BOATS"
  const [Attempt, setAttempt] = useState(0);
  const [LetterNum, setLetterNum] = useState(0);
  const [BoardTiles, setBoardTiles] = useState(Array(6*5).fill({name: null, state: "empty"}));
  const [GameEnded, setGameEnded] = useState(false);

  const KeyboardTiles = {
    Row1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    Row2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    Row3: ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
  };

  const keyboarPress = (value:String) => {
    if(!GameEnded) {
      switch(value) {
        case "DEL": if (LetterNum > 0 && Attempt < 6) updateBoard(null, false);
          break;
        case "ENTER": checkAttempt();
          break;
        default: if(LetterNum < 5 && Attempt < 6) updateBoard(value, true);
          break;
      }
    }
  }

  const updateBoard = (value:any, next:boolean) => {
    var newBoard = BoardTiles.concat();
    var index = LetterNum;
    if(!next) index--;
    newBoard[Attempt*5 + index] = {name: value, state:"empty"};
    if(next) index++;
    setLetterNum(index);
    setBoardTiles(newBoard);
  }

  const checkAttempt = () => {
    var newBoard = BoardTiles.concat();
    var winCondition = true;
    if(Attempt < 6 && LetterNum === 5) {
      for (var i = 0; i < 5; i++) {
        if (newBoard[Attempt*5 + i].name === THEWORD[i]) newBoard[Attempt*5 + i].state = "correct";
        else newBoard[Attempt*5 + i].state = "wrong";
      }
      setBoardTiles(newBoard);
      setAttempt(Attempt + 1);
      setLetterNum(0);
    }
    for (var i = 0; i < 5; i++) {
      if (newBoard[Attempt*5 + i].state !== "correct") winCondition = false;
    }
    if (winCondition){
      alert("WIN!");
      setGameEnded(true);
    }
    else if (Attempt === 5){
      alert("LOSE!");
      setGameEnded(true);
    }
  }

  return (
    <div className="App">
      <div className="game-wrapper">
        <Header />
        <Board words={BoardTiles} />
        <Keyboard row1={KeyboardTiles.Row1} row2={KeyboardTiles.Row2} row3={KeyboardTiles.Row3} press={keyboarPress}/>
      </div>
    </div>
  );
}

export default App;
