import React from "react";
import Cell from "./Cell";
import uuid from "react-uuid";

export default function Row({ number, size, player1, player2, p1Shape, p2Shape }) {
  /**
   * Each cell is given a random key by invoking uuid()
   * Every cell has a key attribute of a random id so that 
   * React can keep track of it. Additionally, every cell is 
   * given attribute of its cell number on the board.
   */
  let row = [];
  for (let i = 1; i <= 8; i++) {
    row.push(<Cell key={`${uuid()}`} number={(number - 1) * 8 + i} size={size} player1={player1} player2={player2} p1Shape={p1Shape} p2Shape={p2Shape} />);
  }
  return <div className="chess_row">{row}</div>;
}
