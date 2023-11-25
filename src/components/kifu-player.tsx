import { useState } from "react";
import classNames from "./kifu-player.module.css";
import Board from "./board";
import { parseSFENPosition } from "../parse-sfen";
import Hand from "./hand";
import Piece, { Color, Type } from "../piece";

const initialPositionInSFEN = 'lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL'

export default function KifuPlayer() {
  // TODO: ナビゲーションボタンから更新する
  const [positionNumber, _] = useState(1)

  const positions = [
    parseSFENPosition(initialPositionInSFEN),
  ]

  // TODO: SFENから持ち駒を生成する
  const whitePiecesInHand = [
    new Piece(Type.Pawn, Color.White),
    new Piece(Type.Lance, Color.White),
    new Piece(Type.Knight, Color.White),
    new Piece(Type.SilverGeneral, Color.White),
    new Piece(Type.GoldGeneral, Color.White),
    new Piece(Type.Bishop, Color.White),
    new Piece(Type.Rook, Color.White),
  ]

  const blackPiecesInHand = [
    new Piece(Type.Pawn, Color.Black),
    new Piece(Type.Lance, Color.Black),
    new Piece(Type.Knight, Color.Black),
    new Piece(Type.SilverGeneral, Color.Black),
    new Piece(Type.GoldGeneral, Color.Black),
    new Piece(Type.Bishop, Color.Black),
    new Piece(Type.Rook, Color.Black),
  ]

  return (
    <div className={`${classNames.kifu_player}`}>
      <Hand pieces={whitePiecesInHand} color={Color.White} />
      <Board pieces={positions[positionNumber - 1].board} />
      <Hand pieces={blackPiecesInHand} color={Color.Black} />
    </div>
  )
}
