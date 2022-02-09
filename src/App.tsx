import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import Game from './components/Game';

function App() {

    var AllWordsFile = require(process.env.PUBLIC_URL + "./files/EnglishWords.txt");
    var PossibleWordsFile = require(process.env.PUBLIC_URL + "./files/PossibleWords.txt");
    const [RandomWord, setRandomWord] = useState("");
    const [AllWords, setAllWords] = useState(Array(1).fill("word"));

    var seedrandom = require('seedrandom');

    const [cookies, setCookie, removeCookie] = useCookies(["Word", "WordDate"]);

    useEffect(() => {

      fetch(PossibleWordsFile).then(r => r.text()).then(text => {
        var currentDate = new Date();
        var DateString = "" + currentDate.getDate() + "." + currentDate.getMonth() + "." + currentDate.getFullYear();
        var rng = seedrandom(DateString);
        var words = text.split("\n");
        var word = words[Math.floor(rng() * words.length)].toUpperCase();
        if (checkWord()) {
          setRandomWord(word);
          setCookie("Word", word, {path: "/"});
          setCookie("WordDate", DateString, {path: "/"});
        }
        else setRandomWord(cookies.Word);
      });

      fetch(AllWordsFile).then(r => r.text()).then(text => {
        var words = text.split("\n");
        setAllWords(words);
      });

    }, []);

    const checkWord = () => {
      var noWord = cookies.Word == undefined;
      var currentDate = new Date();
      var DateString = "" + currentDate.getDate() + "." + currentDate.getMonth() + "." + currentDate.getFullYear();
      var wordDifferentDate = !noWord && (DateString != cookies.WordDate);
      return noWord || wordDifferentDate;
    }

    const resetWord = () => {
      removeCookie("Word");
      removeCookie("WordDate");
    }

  return (
    <Game TheWord={RandomWord} WordDate={cookies.WordDate} Wordlist={AllWords} resetWord={resetWord} />
  );
}

export default App;
