import React from 'react';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';

function Header() {
    return(
        <div className="header-wrapper">
          <a className="header-btn header-btn-wrapper"><FiHelpCircle /></a>
          <div className="title">WORDLE</div>
          <div className="header-btn-wrapper">
            <a className="header-btn"><BsFillFileBarGraphFill /></a>{" "}
            <a className="header-btn"><MdSettings /></a>
          </div>
        </div>
    );
}

export default Header;