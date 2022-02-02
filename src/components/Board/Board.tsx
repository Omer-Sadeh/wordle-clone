import React from 'react';
import BoardTile from './BoardTile';

function Board({words}:{words:any}) {
    return(
        <div className="board-wrapper">
            <div className='board-limits'>
                <div className='row'>{words.try1.map((val:String) => <BoardTile value={val}/>)}</div>
                <div className='row'>{words.try2.map((val:String) => <BoardTile value={val}/>)}</div>
                <div className='row'>{words.try3.map((val:String) => <BoardTile value={val}/>)}</div>
                <div className='row'>{words.try4.map((val:String) => <BoardTile value={val}/>)}</div>
                <div className='row'>{words.try5.map((val:String) => <BoardTile value={val}/>)}</div>
                <div className='row'>{words.try6.map((val:String) => <BoardTile value={val}/>)}</div>
            </div>
        </div>
    );
}

export default Board;