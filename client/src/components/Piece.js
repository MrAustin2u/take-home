import React from "react";

export default function Piece({ number, size }) {
  let className = "player ";
  //fill first 16 cells with red pieces of 8 x 8 board
  if (number > 0 && number < 17) {
    className += "red";
  } else if (number > 48 && number < 64) {
    //fill last 16 cells with pieces pieces 8 x 8 board
    className += "black";
  }

  return <span className={className}></span>;
}
