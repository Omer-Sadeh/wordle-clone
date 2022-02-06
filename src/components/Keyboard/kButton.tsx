import React from 'react';
import { FiDelete } from 'react-icons/fi';
import { AiOutlineEnter } from 'react-icons/ai';

function KButton({value, press, state}:{value:String, press:any, state:string}) {
    if (value === "BACKSPACE") {
        return(<div className='btn-wrapper'><button className={"keyboard-button delete-btn " + state} onClick={() => press(value)}><FiDelete /></button></div>);
    }
    if (value === "ENTER") {
        return(<div className='btn-wrapper'><button className={"keyboard-button delete-btn " + state} onClick={() => press(value)}><AiOutlineEnter /></button></div>);
    }
    else return(
        <div className='btn-wrapper'><button className={"keyboard-button " + state} onClick={() => press(value)}>{value}</button></div>
    );
}

export default KButton;