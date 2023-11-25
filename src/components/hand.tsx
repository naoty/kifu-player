import classNames from "./hand.module.css";
import PieceComponent from "./piece";
import Piece, { Color } from "../piece";
import clsx from "clsx";

export default function Hand({ pieces, color }: { pieces: Piece[], color: Color }) {
  const sortedPieces = [...pieces].sort((a, b) => b.orderInHand - a.orderInHand)
  const pieceComponents = sortedPieces.map((piece, i) => (
    <PieceComponent key={i} piece={piece} hand={true} />
  ))

  return (
    <div className={clsx(
      classNames.hand,
      color === Color.Black && classNames.black_hand,
      color === Color.White && classNames.white_hand,
    )}>
      {...pieceComponents}
    </div>
  )
}
