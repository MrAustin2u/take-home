import React from "react";

export default function Piece({ number, player1, player2 }) {

  let className;
  let style;
  /**
   * Fill first 16 cells and last 16 cells 
   * with user selected piece color.
   * Inline styling implemented to dynamically
   * render selected piece color for players.
   * */
  if (number > 0 && number < 17) {
    className = "player1";
    style = player1;
  } else if (number > 48 && number < 65) {
    className = "player2";
    style = player2;
  }

  return <span className={className} style={{ backgroundColor: style }}></span>;
}
