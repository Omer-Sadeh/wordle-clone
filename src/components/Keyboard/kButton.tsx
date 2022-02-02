import React from 'react';

function KButton({value}:{value:String}) {
    return(
        <div className='btn-wrapper'><button className="keyboard-button">{value}</button></div>
    );
}

export default KButton;