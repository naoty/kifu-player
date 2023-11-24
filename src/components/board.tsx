import classNames from './board.module.css';
import Square from './square';
import RowNumber from './row-number';
import ColumnNumber from './column-number';
import Piece from './piece';
import { Color } from '../color';
import { PieceType } from './piece-type';
import { useState } from 'react';

type PieceProps = {
  type: PieceType,
  color: Color,
}
type Positions = Map<number, PieceProps>

const initialPositions = new Map([
  [11, { type: PieceType.Lance, color: Color.White }],
  [21, { type: PieceType.Knight, color: Color.White }],
  [31, { type: PieceType.SilverGeneral, color: Color.White }],
  [41, { type: PieceType.GoldGeneral, color: Color.White }],
  [51, { type: PieceType.AnotherKing, color: Color.White }],
  [61, { type: PieceType.GoldGeneral, color: Color.White }],
  [71, { type: PieceType.SilverGeneral, color: Color.White }],
  [81, { type: PieceType.Knight, color: Color.White }],
  [91, { type: PieceType.Lance, color: Color.White }],
  [22, { type: PieceType.Bishop, color: Color.White }],
  [82, { type: PieceType.Rook, color: Color.White }],
  [13, { type: PieceType.Pawn, color: Color.White }],
  [23, { type: PieceType.Pawn, color: Color.White }],
  [33, { type: PieceType.Pawn, color: Color.White }],
  [43, { type: PieceType.Pawn, color: Color.White }],
  [53, { type: PieceType.Pawn, color: Color.White }],
  [63, { type: PieceType.Pawn, color: Color.White }],
  [73, { type: PieceType.Pawn, color: Color.White }],
  [83, { type: PieceType.Pawn, color: Color.White }],
  [93, { type: PieceType.Pawn, color: Color.White }],
  [17, { type: PieceType.Pawn, color: Color.Black }],
  [27, { type: PieceType.Pawn, color: Color.Black }],
  [37, { type: PieceType.Pawn, color: Color.Black }],
  [47, { type: PieceType.Pawn, color: Color.Black }],
  [57, { type: PieceType.Pawn, color: Color.Black }],
  [67, { type: PieceType.Pawn, color: Color.Black }],
  [77, { type: PieceType.Pawn, color: Color.Black }],
  [87, { type: PieceType.Pawn, color: Color.Black }],
  [97, { type: PieceType.Pawn, color: Color.Black }],
  [28, { type: PieceType.Rook, color: Color.Black }],
  [88, { type: PieceType.Bishop, color: Color.Black }],
  [19, { type: PieceType.Lance, color: Color.Black }],
  [29, { type: PieceType.Knight, color: Color.Black }],
  [39, { type: PieceType.SilverGeneral, color: Color.Black }],
  [49, { type: PieceType.GoldGeneral, color: Color.Black }],
  [59, { type: PieceType.King, color: Color.Black }],
  [69, { type: PieceType.GoldGeneral, color: Color.Black }],
  [79, { type: PieceType.SilverGeneral, color: Color.Black }],
  [89, { type: PieceType.Knight, color: Color.Black }],
  [99, { type: PieceType.Lance, color: Color.Black }],
])

export default function Board() {
  const [positions, _] = useState<Positions>(initialPositions)

  const [selectedPosition, setSelectedPosition] = useState<number | null>(null)

  const toggleSelectedPosition = (position: number) => {
    if (selectedPosition === position) {
      setSelectedPosition(null)
    } else {
      setSelectedPosition(position)
    }
  }

  const pieceAt = (row: number, column: number) => {
    const position = column * 10 + row;
    const props = positions.get(position)
    if (props) {
      return <Piece
        type={props.type}
        color={props.color}
        onClick={() => toggleSelectedPosition(position)}
      />
    }
    return null
  }

  const kanjiNumber = (num: number) => {
    switch (num) {
      case 1:
        return '一'
      case 2:
        return '二'
      case 3:
        return '三'
      case 4:
        return '四'
      case 5:
        return '五'
      case 6:
        return '六'
      case 7:
        return '七'
      case 8:
        return '八'
      case 9:
        return '九'
      default:
        return ''
    }
  }

  const squares = []
  for (let row = 0; row <= 9; row++) {
    const rows = [];
    for (let column = 9; column > 0; column--) {
      if (row === 0) {
        rows.push(<ColumnNumber value={`${column}`} />)
      } else {
        const position = column * 10 + row
        rows.push(
          <Square selected={selectedPosition === position}>
            {pieceAt(row, column)}
          </Square>
        )
      }
    }
    squares.push(
      <tr>
        {...rows}
        {row > 0 && <RowNumber value={kanjiNumber(row)} />}
      </tr>
    )
  }

  return (
    <table className={`${classNames.board}`}>
      <tbody>
        {...squares}
      </tbody>
    </table>
  )
}
