import clsx from 'clsx';
import classNames from './piece.module.css';
import { PieceOwner } from "./piece-owner";
import { PieceType } from "./piece-type";

export default function Piece({ type, owner }: { type: PieceType, owner: PieceOwner }) {
  return (
    <span className={clsx(classNames.piece, owner == PieceOwner.White && classNames.white)}>
      {type}
    </span>
  )
}
