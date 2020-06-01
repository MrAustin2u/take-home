import React, { Component } from "react";
import Board from "./components/Board";
import "./App.css";


class App extends Component {
  state = {
    boardSize: "",
    player1: "",
    player2: ""
  }


  setBoard = (e) => {
    e.preventDefault()
    this.setState({ boardSize: e.target.value })
  };
  changeColor = (e) => {
    e.preventDefault()
    let player = e.target.name
    let color = e.target.value
    //Conditional state setting so that players can never have the same piece color
    if (player === "player1" && color === "red") this.setState({ player1: "red", player2: "black" })
    else if (player === "player1" && color === "black") this.setState({ player1: "black", player2: "red" })
    else if (player === "player2" && color === "red") this.setState({ player1: "black", player2: "red" })
    else if (player === "player2" && color === "black") this.setState({ player1: "red", player2: "black" })
  }



  render() {
    const { boardSize, player1, player2 } = this.state;
    return (
      <React.Fragment>

        <div className="App">
          <br />
          {/* INPUT N X N BOARD SIZE */}
          <form>
            <label htmlFor="checkerboard">
              CHOOSE BOARD SIZE
        </label>
            <input
              type="text"
              id="checkerboard"
              name="checkerboard"
              placeholder="Enter 8 To Play"
              value={this.state.boardSize}
              onChange={this.setBoard}
            />
          </form>
          <br />

          {/* PLAYER 1 OPTIONS */}
          <form>
            <div>
              <label htmlFor="player1">
                PLAYER 1:
            </label>
              {/* RADIO BUTTONS FOR COLOR SELECTORS */}
              <input
                type="radio"
                id="player1"
                name="player1"
                value="red"
                onChange={this.changeColor}
                checked={this.state.player1 === "red"}
              />
              <label htmlFor="player1">Red</label>
              <input
                type="radio"
                id="player1"
                name="player1"
                value="black"
                onChange={this.changeColor}
                checked={this.state.player1 === "black"}
              />
              <label htmlFor="p1Black">Black</label>
            </div>
          </form>


          {/* PLAYER 2 OPTIONS */}
          <form >
            <div>
              <label htmlFor="player2">
                PLAYER 2:
            </label>
              {/* RADIO BUTTONS FOR COLOR SELECTORS */}
              <input
                type="radio"
                id="player2"
                name="player2"
                value="red"
                onChange={this.changeColor}
                checked={this.state.player2 === "red"}
              />
              <label htmlFor="player2">Red</label>
              <input
                type="radio"
                id="player2"
                name="player2"
                value="black"
                onChange={this.changeColor}
                checked={this.state.player2 === "black"}
              />
              <label htmlFor="p2Black">Black</label>
            </div>
          </form>

          <Board size={Number(boardSize)}
            player1={player1}
            player2={player2}
          />
        </div>
      </React.Fragment>
    );
  };
}

export default App;