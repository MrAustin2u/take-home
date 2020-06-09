import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";



const App = () => {
  const [boardSize, setBoardSize] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [p1Shape, setP1Shape] = useState('')
  const [p2Shape, setP2Shape] = useState('')
  let timeout = null;

  const setBoard = (e) => {
    e.preventDefault()
    clearTimeout(timeout);
    timeout = setTimeout((value) => {
      setBoardSize(value)
    }, 250, e.target.value)
  }

  const changeColor = (e) => {
    let player = e.target.name
    let color = e.target.value
    //Conditional state setting so that players can never have the same piece color
    if (player === "player1" && color === "red") {
      setPlayer1("red");
      setPlayer2("black");
    }
    else if (player === "player1" && color === "black") {
      setPlayer1("black")
      setPlayer2("red")
    }
    else if (player === "player2" && color === "red") {
      setPlayer1("black")
      setPlayer2("red")
    }
    else if (player === "player2" && color === "black") {
      setPlayer1("red")
      setPlayer2("black")
    }
  }

  const changeShape = (e) => {
    let player = e.target.name
    let shape = e.target.value
    //Conditional state setting so that players can never have the same piece shape
    if (player === "p1Shape" && shape === "circle") {
      setP1Shape("circle");
    }
    else if (player === "p1Shape" && shape === "triangle") {
      setP1Shape("triangle");
    }
    else if (player === "p2Shape" && shape === "circle") {
      setP2Shape("circle");
    }
    else if (player === "p2Shape" && shape === "triangle") {
      setP2Shape("triangle");
    }
  }
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
            value={boardSize}
            onChange={setBoard}
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
              onChange={changeColor}
              checked={player1 === "red"}
            />
            <label htmlFor="player1">Red</label>
            <input
              type="radio"
              id="player1"
              name="player1"
              value="black"
              onChange={changeColor}
              checked={player1 === "black"}
            />
            <label htmlFor="plater1">Black</label>

            {/* RADIO BUTTONS FOR SHAPE SELECTORS */}
            <input
              type="radio"
              id="p1Shape"
              name="p1Shape"
              value="circle"
              onChange={changeShape}
              checked={p1Shape === "circle"}
            />
            <label htmlFor="p1Shape">Circle</label>
            <input
              type="radio"
              id="p1Shape"
              name="p1Shape"
              value="triangle"
              onChange={changeShape}
              checked={p1Shape === "triangle"}
            />
            <label htmlFor="p1Shape">Triangle</label>
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
              onChange={changeColor}
              checked={player2 === "red"}
            />
            <label htmlFor="player2">Red</label>
            <input
              type="radio"
              id="player2"
              name="player2"
              value="black"
              onChange={changeColor}
              checked={player2 === "black"}
            />
            <label htmlFor="p2Black">Black</label>

            {/* RADIO BUTTONS FOR SHAPE SELECTORS */}
            <input
              type="radio"
              id="p2Shape"
              name="p2Shape"
              value="circle"
              onChange={changeShape}
              checked={p2Shape === "circle"}
            />
            <label htmlFor="p2Shape">Circle</label>
            <input
              type="radio"
              id="p2Shape"
              name="p2Shape"
              value="triangle"
              onChange={changeShape}
              checked={p2Shape === "triangle"}
            />
            <label htmlFor="p2Shape">Triangle</label>
          </div>
        </form>

        <Board size={Number(boardSize)}
          player1={player1}
          player2={player2}
          p1Shape={p1Shape}
          p2Shape={p2Shape}
        />
      </div>
    </React.Fragment>
  );
};


export default App;