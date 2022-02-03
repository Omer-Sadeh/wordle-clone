import React, { useState } from 'react';
import Board from './Board/Board';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';

function Game({TheWord}:{TheWord:string}) {

  const [Attempt, setAttempt] = useState(0);
  const [LetterNum, setLetterNum] = useState(0);
  const [BoardTiles, setBoardTiles] = useState(Array(6*5).fill({name: null, state: "empty"}));
  const [GameEnded, setGameEnded] = useState(false);

  const [KeyboardTiles, setKeyboardTiles] = useState([{name:'Q', state: ""}, {name:'W', state: ""}, {name:'E', state: ""}, {name:'R', state: ""}, {name:'T', state: ""}, {name:'Y', state: ""}, {name:'U', state: ""}, {name:'I', state: ""}, {name:'O', state: ""},
    {name:'P', state: ""}, {name:'A', state: ""}, {name:'S', state: ""}, {name:'D', state: ""}, {name:'F', state: ""}, {name:'G', state: ""}, {name:'H', state: ""}, {name:'J', state: ""}, {name:'K', state: ""}, {name:'L', state: ""},
    {name:'ENTER', state: ""}, {name:'Z', state: ""}, {name:'X', state: ""}, {name:'C', state: ""}, {name:'V', state: ""}, {name:'B', state: ""}, {name:'N', state: ""}, {name:'M', state: ""}, {name:'DEL', state: ""}]);

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
    var newKeyboard = KeyboardTiles.concat();
    var winCondition = true;
    if(Attempt < 6 && LetterNum === 5) {
      for (var i = 0; i < 5; i++) {
        if (newBoard[Attempt*5 + i].name === TheWord[i]){
          newBoard[Attempt*5 + i].state = "correct";
          for (var j = 0; j < 28; j++) {
            if (newKeyboard[j].name === newBoard[Attempt*5 + i].name){
              newKeyboard[j].state = "correct";
              break;
            }
          }
        }
        else{
          newBoard[Attempt*5 + i].state = "wrong";
          for (var j = 0; j < 28; j++) {
            if (newKeyboard[j].name === newBoard[Attempt*5 + i].name){
              newKeyboard[j].state = "wrong";
              break;
            }
          }
        }
      }
      setBoardTiles(newBoard);
      setKeyboardTiles(newKeyboard);
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

    return(
        <div className="App">
            <div className="game-wrapper">
            <Header />
            <Board words={BoardTiles} />
            <Keyboard press={keyboarPress} letters={KeyboardTiles}/>
        </div>
    </div>
    );
}

export default Game;