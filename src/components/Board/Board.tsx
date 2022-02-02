import React from 'react';
import BoardTile from './BoardTile';

function Board() {
    return(
        <div className="board-wrapper">
            <div className='board-limits'>
                <div className='row'><BoardTile /><BoardTile /><BoardTile /><BoardTile /><BoardTile /></div>
                <div className='row'><BoardTile /><BoardTile /><BoardTile /><BoardTile /><BoardTile /></div>
                <div className='row'><BoardTile /><BoardTile /><BoardTile /><BoardTile /><BoardTile /></div>
                <div className='row'><BoardTile /><BoardTile /><BoardTile /><BoardTile /><BoardTile /></div>
                <div className='row'><BoardTile /><BoardTile /><BoardTile /><BoardTile /><BoardTile /></div>
                <div className='row'><BoardTile /><BoardTile /><BoardTile /><BoardTile /><BoardTile /></div>
            </div>
        </div>
    );
}

export default Board;