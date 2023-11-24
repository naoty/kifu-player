import clsx from 'clsx';
import classNames from './piece.module.css';
import { Color } from "../color";
import { PieceType } from "../piece-type";

export type PieceProp = {
  type: PieceType,
  color: Color,
  onClick?: () => void,
}

export default function Piece({ type, color: color, onClick }: PieceProp) {
  return (
    <span
      className={clsx(
        classNames.piece,
        color == Color.White && classNames.white,
      )}
      onClick={onClick}
    >
      {type}
    </span>
  )
}
