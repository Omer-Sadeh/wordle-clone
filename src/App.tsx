import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import Game from './components/Game';

function App() {

    var file = require(process.env.PUBLIC_URL + "./files/EnglishWords.txt");
    const [RandomWord, setRandomWord] = useState("");
    const [AllWords, setAllWords] = useState(Array(1).fill("word"));

    const [cookies, setCookie, removeCookie] = useCookies(["Word"]);

    useEffect(() => {
      fetch(file).then(r => r.text()).then(text => {
        var words = text.split("\n");
        var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
        if (cookies.Word == undefined) {
          setRandomWord(word);
          setCookie("Word", word, {path: "/"});
        }
        else setRandomWord(cookies.Word);
        setAllWords(words);
      });
    }, []);

  return (
    <Game TheWord={RandomWord} Wordlist={AllWords} resetWord={() => removeCookie("Word")} />
  );
}

export default App;
