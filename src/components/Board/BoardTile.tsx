import React from 'react';

function BoardTile({value, state}:{value:String, state:String}) {
    switch(state) {
        case "empty":
            return(<div className='tile-wrapper'><button className="board-tile empty">{value}</button></div>);
        case "correct":
            return(<div className='tile-wrapper'><button className="board-tile correct">{value}</button></div>);
        case "misplaced":
            return(<div className='tile-wrapper'><button className="board-tile misplaced">{value}</button></div>);
        case "wrong":
            return(<div className='tile-wrapper'><button className="board-tile wrong">{value}</button></div>);
        case "red":
            return(<div className='tile-wrapper'><button className="board-tile red">{value}</button></div>);
        default:
            return(<div className='tile-wrapper'><button className="board-tile empty"></button></div>);
    }
}

export default BoardTile;