import React from 'react';

function SettingsModal({reset}:{reset:any}) {

    return(
        <div className="board-wrapper">
            <div className="Settings-Page">
                <div className="Settings-row"><p>Dark Mode: </p><p>[DarkToggle]</p></div>
                <div className="Settings-row"><p>Reset Button: </p><button className="settings-btn" onClick={() => reset()}>RESET</button></div>
            </div>
        </div>
      );

}

export default SettingsModal;