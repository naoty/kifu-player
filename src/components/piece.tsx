import clsx from 'clsx';
import classNames from './piece.module.css';
import PieceData, { Color } from '../piece';

export default function Piece({ piece }: { piece: PieceData }) {
  return (
    <span
      className={clsx(
        classNames.piece,
        piece.color == Color.White && classNames.white,
      )}
    >
      {piece.toString()}
    </span>
  )
}
