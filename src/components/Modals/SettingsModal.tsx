import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

function SettingsModal({reset, isDarkMode, setIsDarkMode}:{reset:any, isDarkMode:boolean, setIsDarkMode:any}) {

        return(
        <div className="board-wrapper">
            <div className="Settings-Page">
                <div className="Settings-row"><p>Dark Mode: </p><DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} /></div>
                <div className="Settings-row"><p>Reset Button (Dev): </p><button className="settings-btn" onClick={() => reset()}>RESET</button></div>
            </div>
        </div>
      );

}

export default SettingsModal;