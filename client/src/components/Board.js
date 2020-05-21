import React from "react";
import Row from "./Row";
import uuid from "react-uuid";

export default function Board({ size }) {
  /**
   *   Create an array of row components to display in 
   * board component size of the rows array is dependenet 
   * upon the size prop passed down from App component.
   */

  let rows = [];
  for (var i = 1; i <= size.boardSize; i++) {
    // push eight row components into array, and pass index as prop
    rows.push(<Row key={`${uuid()}`} number={i} size={size.boardSize} />);
  }
  return <div className="chess_board">{rows}</div>;
}
