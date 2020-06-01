import React from "react";
import Piece from "./Piece";

export default function Cell({ number, size, player1, player2 }) {
  /**
   * 1st Conditional statement below will determine
   * whether the first cell in a row will be
   * black or white. Odd: White --> Even: Black
   * 
   * 2nd Condtional statement is to determine what cells
   * will receive check pieces.
   */

  let rowNumber = Math.ceil(number / 8);
  let className = "chess_cell ";
  if (rowNumber % 2) {
    className += "odd";
  } else {
    className += "even";
  }

  if (size === 8 && number > 0 && number < 17) {
    return (
      <div className={className}>
        <Piece
          player1={player1}
          number={number}
          size={size}
        />
      </div>
    )
  }
  if (size === 8 && number > 48 && number < 65) {
    return (
      <div className={className}>
        <Piece
          player2={player2}
          number={number}
          size={size}
        />
      </div>
    )
  }
  return (
    <div className={className}></div>
  );
}
