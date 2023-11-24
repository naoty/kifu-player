import { useState } from 'react';
import classNames from './board.module.css';
import Square from './square';
import RowNumber from './row-number';
import ColumnNumber from './column-number';
import PieceComponent from './piece';
import type { Position } from '../position';
import Piece, { Type, Color } from '../piece';
import { numberToKanji } from '../kanji-number';

const initialPosition: Position = [
  [new Piece(Type.Lance, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.King, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.Lance, Color.White)],
  [null, new Piece(Type.Rook, Color.White), null, null, null, null, null, new Piece(Type.Bishop, Color.White), null],
  Array(9).fill(new Piece(Type.Pawn, Color.White)),
  Array(9).fill(null),
  Array(9).fill(null),
  Array(9).fill(null),
  Array(9).fill(new Piece(Type.Pawn, Color.Black)),
  [null, new Piece(Type.Bishop, Color.Black), null, null, null, null, null, new Piece(Type.Rook, Color.Black), null],
  [new Piece(Type.Lance, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.King, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.Lance, Color.Black)],
]

export default function Board() {
  const [position, _] = useState(initialPosition)

  const squares = []

  const columnNumberRow = []
  for (let column = 9; column >= 1; column--) {
    columnNumberRow.push(<ColumnNumber key={column} value={`${column}`} />)
  }
  squares.push(<tr key={0}>{...columnNumberRow}</tr>)

  for (let row = 0; row <= 8; row++) {
    const squareRow = []
    for (let column = 0; column <= 8; column++) {
      const key = (9 - column) * 10 + (row + 1)
      const piece = position[row][column]
      if (piece) {
        squareRow.push(<Square key={key}><PieceComponent piece={piece} /></Square>)
      } else {
        squareRow.push(<Square key={key}></Square>)
      }
    }
    squareRow.push(<RowNumber key={row + 1} value={numberToKanji(row + 1)} />)
    squares.push(<tr key={row + 1}>{...squareRow}</tr>)
  }

  return (
    <table className={`${classNames.board}`}>
      <tbody>
        {...squares}
      </tbody>
    </table>
  )
}
