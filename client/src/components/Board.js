import React from "react";
import Row from "./Row";
import uuid from "react-uuid";

export default function Board({ size, player1, player2, p1Shape, p2Shape }) {
  /**
   * Create an array of row components to display in 
   * board component size of the rows array is dependenet 
   * upon the size prop passed down from App component.
   */
  let rows = [];
  for (var i = 1; i <= size; i++) {
    // push eight row components into array, and pass index as prop
    rows.push(<Row key={`${uuid()}`} number={i} size={size} player1={player1} player2={player2} p1Shape={p1Shape} p2Shape={p2Shape} />);
  }
  return <div className="chess_board">{rows}</div>;
}
