import React from 'react';

import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 3,
      width: 7,
      board: [],
      terrainLib: ['/\\', '/\\', '__', '__', '〒', '〒', '〒', '~~', '*'],
    };

    this.generateBoard = this.generateBoard.bind(this);
  }


  generateBoard() {
    const newBoard = [];
    for (let i = 0; i < this.state.height; i++) {
      const row = [];
      for (let j = 0; j < this.state.width; j++) {
        row.push(
          this.state.terrainLib[Math.floor(Math.random() * this.state.terrainLib.length)],
        );
      }
      newBoard.push(row);
    }
    this.setState({
      board: newBoard,
    });
  }

  handleFormChange() {
    console.log();
  }


  render() {
    return (
      <div className="content">
        <div className="title">
          <h1>Random Map Generator</h1>
        </div>
        <div>
          <form>
            Height:
            <br />
            <input type="number" name="height" />
            <br />
            Width:
            <br />
            <input type="number" name="width" />
            <br />
            <button type="submit">Update</button>
          </form>
        </div>

        <div className="map-display">
         height:
          {' '}
          {this.state.height}
          {' '}
          <br />
         width:
          {' '}
          {this.state.width}
        </div>

        <button onClick={this.generateBoard}>Generate</button>
        <div><Board board={this.state.board || ['a']} /></div>
      </div>
    );
  }
}

export default App;
