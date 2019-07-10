import React from 'react';

import Board from '../components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 3,
      width: 5,
      board: [],
    };

    this.generateBoard = this.generateBoard.bind(this);
  }


  generateBoard() {
    let newBoard = [];
    for (let i = 0; i< this.state.height; i++) {
      let row = [];
      for (let j = 0; j < this.state.width; j++) {
        row.push(0);
      }
      newBoard.push(row);
    }
    this.setState({
      board: newBoard,
    });
  }


  render() {
    return (
      <div className="content">
        <div className="title">
          <h1>Random Map Generator</h1>
        </div>
        {/* <div className="size-selector">
          <form>
            Height:
            <br />
            <input type="text" name="firstname"></input>
            <br />
            Width:
            <br />
            <input type="text" name="lastname"></input>
            <br />
            <button type="button">Make Map</button>
          </form>
        </div> */}

        <div className="map-display">
         height: {this.state.height} <br />
         width: {this.state.width}
        </div>

        <button onClick={this.generateBoard}>Generate</button>
        <div><Board board={this.state.board || ['a']} /></div>
      </div>
    );
  }
}

export default App;
