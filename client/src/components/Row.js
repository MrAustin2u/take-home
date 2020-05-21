import React from "react";
import Cell from "./Cell";
import uuid from "react-uuid";

export default function Row({ number, size }) {
  /**
   * Each cell is given a random key by invoking uuid()
   * Every cell has a key attribute of a random id so that 
   * React can keep track of it. Additionally, every cell is 
   * given attribute of its cell number on the board.
   */
  let row = [];
  let cellCount;
  for (let i = 1; i <= 8; i++) {
    row.push(<Cell key={`${uuid()}`} number={(number - 1) * 8 + i} size={size.boardSize} />);
  }
  return <div className="chess_row">{row}</div>;
}
