import React from 'react';

const listStyle = {
  listStyleType: "none",
};

function Board(props) {
  return (
    <div>
      <ul style={listStyle}>
        {props.board.map((el, i)=>{
          let row = '';
          for (let i = 0; i < el.length; i++) {
            row += el[i];
          }
          return <li key={i}>{row}</li>;
        })}     
      </ul>
    </div>
  );
}

export default Board;
