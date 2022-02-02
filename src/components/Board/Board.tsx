import React from 'react';
import BoardTile from './BoardTile';

function Board({words}:{words:any[]}) {
    return(
        <div className="board-wrapper">
            <div className='board-limits'>
                <div className='row'>{words.slice(0,5).map((val:any) => <BoardTile value={val.name} state={val.state}/>)}</div>
                <div className='row'>{words.slice(5,10).map((val:any) => <BoardTile value={val.name} state={val.state}/>)}</div>
                <div className='row'>{words.slice(10,15).map((val:any) => <BoardTile value={val.name} state={val.state}/>)}</div>
                <div className='row'>{words.slice(15,20).map((val:any) => <BoardTile value={val.name} state={val.state}/>)}</div>
                <div className='row'>{words.slice(20,25).map((val:any) => <BoardTile value={val.name} state={val.state}/>)}</div>
                <div className='row'>{words.slice(25,30).map((val:any) => <BoardTile value={val.name} state={val.state}/>)}</div>
            </div>
        </div>
    );
}

export default Board;