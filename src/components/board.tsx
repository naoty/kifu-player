import classNames from './board.module.css';
import Square from './square';
import RowNumber from './row-number';
import ColumnNumber from './column-number';
import Piece from './piece';
import { PieceOwner } from './piece-owner';
import { PieceType } from './piece-type';
import { useState } from 'react';

type PieceProps = {
  type: PieceType,
  owner: PieceOwner,
}
type Positions = Map<number, PieceProps>

const initialPositions = new Map([
  [11, { type: PieceType.Lance, owner: PieceOwner.White }],
  [21, { type: PieceType.Knight, owner: PieceOwner.White }],
  [31, { type: PieceType.SilverGeneral, owner: PieceOwner.White }],
  [41, { type: PieceType.GoldGeneral, owner: PieceOwner.White }],
  [51, { type: PieceType.AnotherKing, owner: PieceOwner.White }],
  [61, { type: PieceType.GoldGeneral, owner: PieceOwner.White }],
  [71, { type: PieceType.SilverGeneral, owner: PieceOwner.White }],
  [81, { type: PieceType.Knight, owner: PieceOwner.White }],
  [91, { type: PieceType.Lance, owner: PieceOwner.White }],
  [22, { type: PieceType.Bishop, owner: PieceOwner.White }],
  [82, { type: PieceType.Rook, owner: PieceOwner.White }],
  [13, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [23, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [33, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [43, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [53, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [63, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [73, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [83, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [93, { type: PieceType.Pawn, owner: PieceOwner.White }],
  [17, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [27, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [37, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [47, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [57, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [67, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [77, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [87, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [97, { type: PieceType.Pawn, owner: PieceOwner.Black }],
  [28, { type: PieceType.Rook, owner: PieceOwner.Black }],
  [88, { type: PieceType.Bishop, owner: PieceOwner.Black }],
  [19, { type: PieceType.Lance, owner: PieceOwner.Black }],
  [29, { type: PieceType.Knight, owner: PieceOwner.Black }],
  [39, { type: PieceType.SilverGeneral, owner: PieceOwner.Black }],
  [49, { type: PieceType.GoldGeneral, owner: PieceOwner.Black }],
  [59, { type: PieceType.AnotherKing, owner: PieceOwner.Black }],
  [69, { type: PieceType.GoldGeneral, owner: PieceOwner.Black }],
  [79, { type: PieceType.SilverGeneral, owner: PieceOwner.Black }],
  [89, { type: PieceType.Knight, owner: PieceOwner.Black }],
  [99, { type: PieceType.Lance, owner: PieceOwner.Black }],
])

export default function Board() {
  const [positions, setPositions] = useState<Positions>(initialPositions)

  const pieceAt = (row: number, column: number) => {
    const position = row + column * 10;
    const props = positions.get(position)
    if (props) {
      return <Piece type={props.type} owner={props.owner} />
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
    for (let column = 1; column <= 9; column++) {
      if (row === 0) {
        rows.push(<ColumnNumber value={`${10 - column}`} />)
      } else {
        rows.push(<Square>{pieceAt(row, column)}</Square>)
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
