import React from "react";
import Piece from "./Piece";

export default function Cell({ number, size }) {
  /**
   * Conditional statement below will determine
   * whether the first cell in a row will be
   * black or white. Odd: White --> Even: Black
   */
  let rowNumber = Math.ceil(number / 8);
  let className = "chess_cell ";

  if (rowNumber % 2) {
    className += "odd";
  } else {
    className += "even";
  }

  return (
    <div className={className}>
      {number}
      <Piece size={size} />
    </div>
  );
}
