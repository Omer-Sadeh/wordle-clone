import React from 'react';
import KButton from './kButton';

function Keyboard({row1, row2, row3}:{row1:String[], row2:String[], row3:String[]}) {
    return(
        <div className="keyboard-wrapper">
            <div className='row1'>
                {row1.map((letter: String) => <KButton value={letter} />)}
            </div>
            <div className='row2'>
                {row2.map((letter: String) => <KButton value={letter} />)}
            </div>
            <div className='row3'>
                {row3.map((letter: String) => <KButton value={letter} />)}
            </div>
        </div>
    );
}

export default Keyboard;