import React from 'react';

function KButton({value, press, state}:{value:String, press:any, state:string}) {
    return(
        <div className='btn-wrapper'><button className={"keyboard-button " + state} onClick={() => press(value)}>{value}</button></div>
    );
}

export default KButton;