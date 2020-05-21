import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";

export default function App() {
  const [boardSize, setBoardSize] = useState("");
  const [pieceColor, setPieceColor] = useState("red");
  const [pieceShape, setPieceShape] = useState("player1");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      {/* INPUT N X N BOARD SIZE */}
      <form onSubmit={onSubmit}>
        <label action="#" for="checkerboard">
          CHOOSE BOARD SIZE
        </label>
        <input
          type="text"
          id="checkerboard"
          name="checkerboard"
          placeholder="Enter Number Here"
          value={boardSize}
          onChange={(e) => setBoardSize(e.target.value)}
        />
        <br />

        {/* PLAYER 1 OPTIONS */}

        <label action="#" for="player1">
          PLAYER 1:
        </label>
        {/* RADIO BUTTONS FOR COLOR SELECTORS */}
        <input type="radio" id="red" name="player1-red" value="red" />
        <label for="player1-red">Red</label>
        <input type="radio" id="black" name="player2-color" value="black" />
        <label for="player1-black">Black</label>

        {/* RADIO BUTTONS FOR SHAPE SELECTORS */}

        <input
          type="radio"
          id="player1-circle"
          name="player1-cirlce"
          value="circle"
        />
        <label for="player1-circle">Circle</label>
        <input
          type="radio"
          id="player1-triangle"
          name="player1-triangle"
          value="triangle"
        />
        <label for="player2-triangle">Triangle</label>
        <br />

        {/* PLAYER 2 OPTIONS */}

        <label action="#" for="player1">
          PLAYER 2:
        </label>
        {/* RADIO BUTTONS FOR COLOR SELECTORS */}
        <input
          type="radio"
          id="player1-red"
          name="player1-pieceColor"
          value="red"
        />
        <label for="player1-pieceColor">Red</label>
        <input
          type="radio"
          id="player2-black"
          name="player2-pieceColor"
          value="black"
        />
        <label for="player2-pieceColor">Black</label>

        {/* RADIO BUTTONS FOR SHAPE SELECTORS */}
        <input
          type="radio"
          id="player1-circle"
          name="player1-pieceColor"
          value="circle"
        />
        <label for="player1-shape">Circle</label>
        <input
          type="radio"
          id="player2-triangle"
          name="player2-shape"
          value="triangle"
        />
        <label for="player2-pieceColor">Triangle</label>
      </form>

      {/* <input type="submit" value="Submit" /> */}

      <Board size={{ boardSize }} />
    </div>
  );
}
