import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import Game from './components/Game';

function App() {

    var file = require(process.env.PUBLIC_URL + "./files/EnglishWords.txt");
    const [RandomWord, setRandomWord] = useState("");
    const [AllWords, setAllWords] = useState(Array(1).fill("word"));

    const [cookies, setCookie, removeCookie] = useCookies(["tilesTEST", "attemptTEST", "endedTEST", "wordTEST"]);

    useEffect(() => {
      fetch(file).then(r => r.text()).then(text => {
        var words = text.split("\n");
        var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
        if (cookies.wordTEST == undefined) {
          setRandomWord(word);
          setCookie("wordTEST", word, {path: "/"});
        }
        else setRandomWord(cookies.wordTEST);
        setAllWords(words);
      });
    }, []);

    const resetWord = () => {
      removeCookie("wordTEST");
    }

  return (
    <Game TheWord={RandomWord} Wordlist={AllWords} resetWord={resetWord} />
  );
}

export default App;
