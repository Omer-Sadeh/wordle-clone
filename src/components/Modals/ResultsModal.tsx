import React from 'react';
import Modal from 'react-modal';
import Countdown from 'react-countdown';
import { BsShare } from 'react-icons/bs';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ResultsModal({isOpen, modalToggle, GameState, Attempt, share}:{isOpen: boolean, modalToggle: any, GameState: string, Attempt:number, share: any}) {

  const Today = new Date;

  const ShareBoardBtn = () => {
    return(<CopyToClipboard text={share()} onCopy={() => alert("copied")}><button className="share-btn">SHARE <BsShare /></button></CopyToClipboard>);
  }


  if (GameState === "running") {
    return(
      <Modal isOpen={isOpen} onRequestClose={modalToggle} overlayClassName="Overlay" className="Modal" closeTimeoutMS={100}>
        <div className="modal-content">
          <div className="modalRow1"><a className="modal-close" onClick={modalToggle}>X</a></div>
          <div className="modalRow2">Keep Trying!</div>
          <div className="modalRow3"><p>Next Word:</p><Countdown date={new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 1, 0, 0 ,0)} /></div>
        </div>
      </Modal>
    );
  }

  else {
    return(
      <Modal isOpen={isOpen} onRequestClose={modalToggle} overlayClassName="Overlay" className="Modal" closeTimeoutMS={100}>
        <div className="modal-content">
          <div className="modalRow1"><a className="modal-close" onClick={modalToggle}>X</a></div>
          <div className="modalRow2">{GameState === "win" ? "You Won!" : "You Lost!"}</div>
          <div className="modalRow3"><p>{Attempt} Guesses</p><p>  |  </p><Countdown date={new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 1, 0, 0 ,0)} /><p>  |  </p>{ShareBoardBtn()}</div>
        </div>
      </Modal>
    );
  }
}

export default ResultsModal;