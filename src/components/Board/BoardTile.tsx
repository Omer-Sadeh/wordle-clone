import React from 'react';

function BoardTile({value}:{value:String}) {
    return(
        <div className='tile-wrapper'><button className="board-tile empty">{value}</button></div>
    );
}

export default BoardTile;