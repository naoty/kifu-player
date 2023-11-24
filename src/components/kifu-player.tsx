import { useState } from "react";
import Board from "./board";
import Piece, { Type, Color } from "../piece";
import { Position } from "../position";

const initialPosition: Position = [
  [new Piece(Type.Lance, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.King, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.Lance, Color.White)],
  [null, new Piece(Type.Rook, Color.White), null, null, null, null, null, new Piece(Type.Bishop, Color.White), null],
  Array(9).fill(new Piece(Type.Pawn, Color.White)),
  Array(9).fill(null),
  Array(9).fill(null),
  Array(9).fill(null),
  Array(9).fill(new Piece(Type.Pawn, Color.Black)),
  [null, new Piece(Type.Bishop, Color.Black), null, null, null, null, null, new Piece(Type.Rook, Color.Black), null],
  [new Piece(Type.Lance, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.King, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.Lance, Color.Black)],
]

export default function KifuPlayer() {
  // TODO: ナビゲーションボタンから更新する
  const [positionNumber, _] = useState(1)

  // TODO: 棋譜データから生成する
  const positions: Position[] = [
    initialPosition,
  ]

  return (
    <div>
      <Board position={positions[positionNumber - 1]} />
    </div>
  )
}
