import React from 'react';
import Modal from 'react-modal';
import Countdown from 'react-countdown';

function ResultsModal({isOpen, modalToggle, GameEnded}:{isOpen: boolean, modalToggle: any, GameEnded: boolean}) {

  const Today = new Date;

  


    return(
      <Modal isOpen={isOpen} onRequestClose={modalToggle} overlayClassName="Overlay" className="Modal" closeTimeoutMS={2000}>
        <div className="modal-content">
          <div className="modalRow1"><a className="modal-close" onClick={modalToggle}>X</a></div>
          <div className="modalRow2">You won!</div>
          <div className="modalRow3"><p>Next Word:</p><Countdown date={new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 1, 0, 0 ,0)} /><p>  |  </p><p>SHARE</p></div>
        </div>
      </Modal>
    );
}

export default ResultsModal;