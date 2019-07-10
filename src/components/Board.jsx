import React from 'react';

function Board(props) {
  return (
    <div>
      <div>
        {props.board.map((el, i) => el[i])}
      </div>
      <div />
    </div>
  );
}

export default Board;
