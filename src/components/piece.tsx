import clsx from 'clsx';
import classNames from './piece.module.css';
import { Color } from "../color";
import { PieceType } from "../piece-type";

export type PieceProp = {
  type: PieceType,
  color: Color,
}

export default function Piece({ type, color: color }: PieceProp) {
  return (
    <span
      className={clsx(
        classNames.piece,
        color == Color.White && classNames.white,
      )}
    >
      {type}
    </span>
  )
}
