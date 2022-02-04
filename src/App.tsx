import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import Game from './components/Game';

function App() {

    var file = require(process.env.PUBLIC_URL + "./files/EnglishWords.txt");
    const [RandomWord, setRandomWord] = useState("");
    const [AllWords, setAllWords] = useState(Array(1).fill("word"));

    const [cookies, setCookie, removeCookie] = useCookies(["Word", "WordDate"]);

    useEffect(() => {
      fetch(file).then(r => r.text()).then(text => {
        var words = text.split("\n");
        var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
        if (checkWord()) {
          setRandomWord(word);
          setCookie("Word", word, {path: "/"});
          var currentDate = new Date();
          var DateString = "" + currentDate.getDate() + "." + currentDate.getMonth() + "." + currentDate.getFullYear();
          setCookie("WordDate", DateString, {path: "/"});
        }
        else setRandomWord(cookies.Word);
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
