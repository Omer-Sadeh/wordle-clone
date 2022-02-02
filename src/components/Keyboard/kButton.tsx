import React from 'react';

function KButton({value, press}:{value:String, press:any}) {
    return(
        <div className='btn-wrapper'><button className="keyboard-button" onClick={() => press(value)}>{value}</button></div>
    );
}

export default KButton;