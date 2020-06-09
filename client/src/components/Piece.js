import React from "react";

export default function Piece({ number, player1, player2, p1Shape, p2Shape }) {

  let className;
  /**
   * Fill first 16 cells and last 16 cells 
   * with user selected piece color.
   * Inline styling implemented to dynamically
   * render selected piece color and shape for players.
   * */
  if (number > 0 && number < 17 && p1Shape === 'circle') {
    className = "player1";
    return <span className={className} style={{ backgroundColor: player1, borderRadius: `50%`, padding: '5px' }}></span>;
  }
  else if (number > 0 && number < 17 && p1Shape === 'triangle') {
    className = "player1";
    return <span
      className={className}
      style={{
        color: player1,
        width: 0,
        height: 0,
        borderLeft: `25px solid transparent`,
        borderRight: `25px solid transparent`,
        borderBottom: `50px solid `
      }}></span>;
  }
  else if (number > 48 && number < 65 && p2Shape === 'circle') {
    className = "player2";
    return <span className={className} style={{ backgroundColor: player2, borderRadius: `50%` }}></span>;
  }
  else if (number > 48 && number < 65 && p2Shape === 'triangle') {
    className = "player2";
    return <span
      className={className}
      style={{
        color: player2,
        width: 0,
        height: 0,
        borderLeft: `25px solid transparent`,
        borderRight: `25px solid transparent`,
        borderBottom: `50px solid `
      }}></span>;
  }
  else {
    return null
  }

}
