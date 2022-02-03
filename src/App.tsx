import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './components/Game';

function App() {

    var file = require(process.env.PUBLIC_URL + "./files/EnglishWords.txt");
    const [RandomWord, setRandomWord] = useState("");
    const [AllWords, setAllWords] = useState(Array(1).fill("word"));

    useEffect(() => {
      fetch(file).then(r => r.text()).then(text => {
        var words = text.split("\n");
        var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
        setRandomWord(word);
        setAllWords(words);
      });
    }, []);

  return (
    <Game TheWord={RandomWord} Wordlist={AllWords} />
  );
}

export default App;
