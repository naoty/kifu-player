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

  const pieceAt = (position: number) => {
    const props = positions.get(position)
    if (props) {
      return <Piece type={props.type} owner={props.owner} />
    }
    return null
  }

  return (
    <table className={`${classNames.board}`}>
      <tbody>
        <tr>
          <ColumnNumber value='9' />
          <ColumnNumber value='8' />
          <ColumnNumber value='7' />
          <ColumnNumber value='6' />
          <ColumnNumber value='5' />
          <ColumnNumber value='4' />
          <ColumnNumber value='3' />
          <ColumnNumber value='2' />
          <ColumnNumber value='1' />
        </tr>
        <tr>
          <Square>{pieceAt(91)}</Square>
          <Square>{pieceAt(81)}</Square>
          <Square>{pieceAt(71)}</Square>
          <Square>{pieceAt(61)}</Square>
          <Square>{pieceAt(51)}</Square>
          <Square>{pieceAt(41)}</Square>
          <Square>{pieceAt(31)}</Square>
          <Square>{pieceAt(21)}</Square>
          <Square>{pieceAt(11)}</Square>
          <RowNumber value='一' />
        </tr>
        <tr>
          <Square>{pieceAt(92)}</Square>
          <Square>{pieceAt(82)}</Square>
          <Square>{pieceAt(72)}</Square>
          <Square>{pieceAt(62)}</Square>
          <Square>{pieceAt(52)}</Square>
          <Square>{pieceAt(42)}</Square>
          <Square>{pieceAt(32)}</Square>
          <Square>{pieceAt(22)}</Square>
          <Square>{pieceAt(12)}</Square>
          <RowNumber value='二' />
        </tr>
        <tr>
          <Square>{pieceAt(93)}</Square>
          <Square>{pieceAt(83)}</Square>
          <Square>{pieceAt(73)}</Square>
          <Square>{pieceAt(63)}</Square>
          <Square>{pieceAt(53)}</Square>
          <Square>{pieceAt(43)}</Square>
          <Square>{pieceAt(33)}</Square>
          <Square>{pieceAt(23)}</Square>
          <Square>{pieceAt(13)}</Square>
          <RowNumber value='三' />
        </tr>
        <tr>
          <Square>{pieceAt(94)}</Square>
          <Square>{pieceAt(84)}</Square>
          <Square>{pieceAt(74)}</Square>
          <Square>{pieceAt(64)}</Square>
          <Square>{pieceAt(54)}</Square>
          <Square>{pieceAt(44)}</Square>
          <Square>{pieceAt(34)}</Square>
          <Square>{pieceAt(24)}</Square>
          <Square>{pieceAt(14)}</Square>
          <RowNumber value='四' />
        </tr>
        <tr>
          <Square>{pieceAt(95)}</Square>
          <Square>{pieceAt(85)}</Square>
          <Square>{pieceAt(75)}</Square>
          <Square>{pieceAt(65)}</Square>
          <Square>{pieceAt(55)}</Square>
          <Square>{pieceAt(45)}</Square>
          <Square>{pieceAt(35)}</Square>
          <Square>{pieceAt(25)}</Square>
          <Square>{pieceAt(15)}</Square>
          <RowNumber value='五' />
        </tr>
        <tr>
          <Square>{pieceAt(96)}</Square>
          <Square>{pieceAt(86)}</Square>
          <Square>{pieceAt(76)}</Square>
          <Square>{pieceAt(66)}</Square>
          <Square>{pieceAt(56)}</Square>
          <Square>{pieceAt(46)}</Square>
          <Square>{pieceAt(36)}</Square>
          <Square>{pieceAt(26)}</Square>
          <Square>{pieceAt(16)}</Square>
          <RowNumber value='六' />
        </tr>
        <tr>
          <Square>{pieceAt(97)}</Square>
          <Square>{pieceAt(87)}</Square>
          <Square>{pieceAt(77)}</Square>
          <Square>{pieceAt(67)}</Square>
          <Square>{pieceAt(57)}</Square>
          <Square>{pieceAt(47)}</Square>
          <Square>{pieceAt(37)}</Square>
          <Square>{pieceAt(27)}</Square>
          <Square>{pieceAt(17)}</Square>
          <RowNumber value='七' />
        </tr>
        <tr>
          <Square>{pieceAt(98)}</Square>
          <Square>{pieceAt(88)}</Square>
          <Square>{pieceAt(78)}</Square>
          <Square>{pieceAt(68)}</Square>
          <Square>{pieceAt(58)}</Square>
          <Square>{pieceAt(48)}</Square>
          <Square>{pieceAt(38)}</Square>
          <Square>{pieceAt(28)}</Square>
          <Square>{pieceAt(18)}</Square>
          <RowNumber value='八' />
        </tr>
        <tr>
          <Square>{pieceAt(99)}</Square>
          <Square>{pieceAt(89)}</Square>
          <Square>{pieceAt(79)}</Square>
          <Square>{pieceAt(69)}</Square>
          <Square>{pieceAt(59)}</Square>
          <Square>{pieceAt(49)}</Square>
          <Square>{pieceAt(39)}</Square>
          <Square>{pieceAt(29)}</Square>
          <Square>{pieceAt(19)}</Square>
          <RowNumber value='九' />
        </tr>
      </tbody>
    </table>
  )
}
