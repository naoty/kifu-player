import clsx from 'clsx';
import classNames from './piece.module.css';
import { PieceOwner } from "./piece-owner";
import { PieceType } from "./piece-type";

export type PieceProp = {
  type: PieceType,
  owner: PieceOwner,
  onClick?: () => void,
}

export default function Piece({ type, owner, onClick }: PieceProp) {
  return (
    <span
      className={clsx(
        classNames.piece,
        owner == PieceOwner.White && classNames.white,
      )}
      onClick={onClick}
    >
      {type}
    </span>
  )
}
