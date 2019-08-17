/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 10,
      width: 30,
      board: [],
      mapTerrain: ['/\\', '/\\', '__', '__', '〒', '〒', '〒', '~~', '*'],
      terrainLib: {
        mountain: '/\\', plain: '__', forest: '〒', water: '~~', city: '*',
      },
      showTerrainSelection: false,
      mWeight: 2,
      pWeight: 2,
      fWeight: 3,
      wWeight: 1,
      cWeight: 1,
    };

    this.generateBoard = this.generateBoard.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.toggleTerrain = this.toggleTerrain.bind(this);
    this.generateTerrainFromWeights = this.generateTerrainFromWeights.bind(this);
  }


  generateBoard() {
    const newBoard = [];
    for (let i = 0; i < this.state.height; i++) {
      const row = [];
      for (let j = 0; j < this.state.width; j++) {
        row.push(
          this.state.mapTerrain[Math.floor(Math.random() * this.state.mapTerrain.length)],
        );
      }
      newBoard.push(row);
    }
    this.setState({
      board: newBoard,
    });
  }

  handleFormChange(e) {
    const value = e.target.value || 0;
    this.setState({
      [e.target.name]: value,
    });
  }

  toggleTerrain() {
    this.setState({
      showTerrainSelection: !this.state.showTerrainSelection,
    });
  }

  generateTerrainFromWeights() {
    const tLib = this.state.terrainLib;
    const newMapTerrain = [];
    function addToNewWeights(weight, name) {
      for (let i = 0; i < weight; i = 1 + i) {
        newMapTerrain.push(tLib[name]);
      }
    }

    addToNewWeights(this.state.mWeight, 'mountain');
    addToNewWeights(this.state.pWeight, 'plain');
    addToNewWeights(this.state.fWeight, 'forest');
    addToNewWeights(this.state.wWeight, 'water');
    addToNewWeights(this.state.cWeight, 'city');

    this.setState({
      mapTerrain: newMapTerrain,
    }, this.toggleTerrain);
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
            <input
              type="number"
              name="height"
              onChange={this.handleFormChange}
            />
            {' '}
            {this.state.height}
            <br />
            Width:
            <input
              type="number"
              name="width"
              onChange={this.handleFormChange}
            />
            {' '}
            {this.state.width}
            <br />
          </form>
        </div>
        {!this.state.showTerrainSelection ? (
          <div>
            <br />
            Terrain Weights
            <br />
            /\ :
            {' '}
            {this.state.mWeight}
            <br />
            __ :
            {' '}
            {this.state.pWeight}
            <br />
            〒 :
            {' '}
            {this.state.fWeight}
            <br />
            ~~ :
            {' '}
            {this.state.wWeight}
            <br />
            * :
            {' '}
            {this.state.cWeight}
          </div>
        ) : (<div />)}

        <button type="button" onClick={this.toggleTerrain}>
          Change Terrain
        </button>

        {this.state.showTerrainSelection ? (
          <div>
            Please input a number from 0-5 for each of the terrain types.
            <form>
              Mountain (/\) weight:
              <input
                type="number"
                name="mWeight"
                onChange={this.handleFormChange}
              />
              <br />
              Plain (__) weight:
              <input
                type="number"
                name="pWeight"
                onChange={this.handleFormChange}
              />
              <br />
              Forest (〒) weight:
              <input
                type="number"
                name="fWeight"
                onChange={this.handleFormChange}
              />
              <br />
              Water (~~) weight:
              <input
                type="number"
                name="wWeight"
                onChange={this.handleFormChange}
              />
              <br />
              City (*) weight:
              <input
                type="number"
                name="cWeight"
                onChange={this.handleFormChange}
              />
            </form>
            <button type="button" onClick={this.generateTerrainFromWeights}>
              Change Terrain Weights
            </button>
            <button type="button" onClick={this.toggleTerrain}>
              Close
            </button>
          </div>
        ) : (
          <div />
        )}

        <button onClick={this.generateBoard}>Generate</button>
        <div>
          <Board board={this.state.board || ['a']} />
        </div>
      </div>
    );
  }
}

export default App;
