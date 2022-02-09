import React from 'react';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';

function Header({reset, openModal}:{reset: any, openModal: any}) {
    return(
        <div className="header-wrapper">
          <a className="header-btn header-btn-wrapper"><FiHelpCircle /></a>
          <div className="title">WORDLE</div>
          <div className="header-btn-wrapper">
            <a className="header-btn" onClick={() => openModal()} ><BsFillFileBarGraphFill /></a>{" "}
            <a className="header-btn" onClick={() => reset()} ><MdSettings /></a>
          </div>
        </div>
    );
}

export default Header;