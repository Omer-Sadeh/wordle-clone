import React from 'react';
import KButton from './kButton';

function Keyboard({press, letters}:{press:any, letters:any[]}) {
    return(
        <div className="keyboard-wrapper">
            <div className='row1'>
                {letters.slice(0,10).map((letter: any) => <KButton value={letter.name} press={press} state={letter.state} />)}
            </div>
            <div className='row2'>
                {letters.slice(10,19).map((letter: any) => <KButton value={letter.name} press={press} state={letter.state} />)}
            </div>
            <div className='row3'>
                {letters.slice(19,28).map((letter: any) => <KButton value={letter.name} press={press} state={letter.state} />)}
            </div>
        </div>
    );
}

export default Keyboard;