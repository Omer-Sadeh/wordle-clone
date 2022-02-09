import React from 'react';
import Modal from 'react-modal';

function HelpModal() {

    return(
        <div className="board-wrapper">
            <div className="Help-Page">
                <p>Guess the <b>WORDLE</b> in 6 tries.<br/><br/>
                Each guess must be a valid 5 letter word. Hit the enter button to submit.<br/><br/>
                After each guess, the color of the tiles will change to show how close your guess was to the word.<hr/><br/>
                <b>Rules:</b><br/><br/>
                <span style={{color: "rgb(72, 134, 72)"}}><b>Green</b> Letter</span> - it is in the word and in the correct spot.<br/><br/>
                <span style={{color: "rgb(177, 170, 76)"}}><b>Yellow</b> Letter</span> - it is in the word but in the wrong spot.<br/><br/>
                <span style={{color: "rgb(58, 58, 58)"}}><b>Gray</b> Letter</span> - it  is not in the word in any spot.<hr/><br/>
                <b>A new WORDLE will be available each day!</b>
                </p>
            </div>
        </div>
      );

}

export default HelpModal;
