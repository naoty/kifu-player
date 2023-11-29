import clsx from 'clsx';
import classNames from './piece.module.css';
import PieceData, { Color } from '../piece';

export default function Piece({ piece, hand = false }: { piece: PieceData, hand?: boolean }) {
  return (
    <span
      className={clsx(
        'piece',
        classNames.piece,
        piece.color == Color.White && classNames.white,
        hand && classNames.hand,
      )}
    >
      {piece.toString()}
    </span>
  )
}
