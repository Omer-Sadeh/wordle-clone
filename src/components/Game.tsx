import React, { useState } from 'react';
import Board from './Board/Board';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';

function Game({TheWord, Wordlist}:{TheWord:string, Wordlist:String[]}) {

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
        case "ENTER": 
          checkAttempt();
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

    var currentWord = '';
    for (var i = 0; i < 5; i++) currentWord += newBoard[Attempt*5 + i].name;

    var flag = false;
    for (i = 0; i < Wordlist.length; i++) {
      if (Wordlist[i].substring(0,5) === currentWord.toLowerCase()) {flag = true; break;}
    }

    if(Attempt < 6 && LetterNum === 5 && flag) {

      var indexesNotCorrect = [0, 1, 2, 3, 4];
      for (i = 0; i < 5; i++) { // run through all attempt letters and check if the letter is in the right position
        if (newBoard[Attempt*5 + i].name === TheWord[i]){
          newBoard[Attempt*5 + i].state = "correct";
          indexesNotCorrect.splice(indexesNotCorrect.indexOf(i), 1);
          newKeyboard.map(key => {if (key.name === newBoard[Attempt*5 + i].name) key.state = "correct";});
        }
      }

      var IndexesToCheck = indexesNotCorrect.concat();
      indexesNotCorrect.map(index => { // run through all left attempt letters and check if the letter is in some other position
        for (var j = 0; j < 5; j++) {
          if (IndexesToCheck.indexOf(j) !== -1) {
            if (newBoard[Attempt*5 + index].name === TheWord[j]) {
              newBoard[Attempt*5 + index].state = "misplaced";
              IndexesToCheck.splice(IndexesToCheck.indexOf(j), 1);
              newKeyboard.map(key => {if (key.name === newBoard[Attempt*5 + index].name) key.state = "misplaced";});
              break;
            }
          }    
        }
      });

      indexesNotCorrect.map(index => {// run through all left attempt letters and set them to wrong
        if(newBoard[Attempt*5 + index].state !== "misplaced") {
          newBoard[Attempt*5 + index].state = "wrong";
          newKeyboard.map(key => {if (key.name === newBoard[Attempt*5 + index].name) key.state = "wrong";});
        }
      })

      // set board to new state
      setBoardTiles(newBoard);
      setKeyboardTiles(newKeyboard);
      setAttempt(Attempt + 1);
      setLetterNum(0);

      // check win/lose condition
    for (i = 0; i < 5; i++) {
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
    else if (Attempt < 6 && LetterNum === 5 && !flag) { // in case the typed word doesnt exist in dictionary
      wrongSequence();
    }
    
  }

  const wrongSequence = async () => {
    var originalBoard = BoardTiles.concat();
    var newBoard = BoardTiles.concat();
    for (var i = 0; i < 5; i++) {
      newBoard[Attempt*5 + i].state = "red";
      newBoard[Attempt*5 + i].name = BoardTiles[Attempt*5 + i].name;
    }
    setBoardTiles(newBoard);
    await timeout(500);
    for (var i = 0; i < 5; i++) {
      newBoard[Attempt*5 + i].state = "empty";
      newBoard[Attempt*5 + i].name = BoardTiles[Attempt*5 + i].name;
    }
    setBoardTiles(newBoard);
  }
  function timeout(delay: number) {return new Promise( res => setTimeout(res, delay) );}

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