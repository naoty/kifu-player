import { useState } from "react";
import classNames from "./kifu-player.module.css";
import Board from "./board";
import Hand from "./hand";
import { parseSFENPosition } from "../parse-sfen";
import { Color } from "../piece";

const initialPositionInSFEN = '4k4/9/4G4/9/9/9/9/9/9 b Gg2 1'

export default function KifuPlayer() {
  // TODO: ナビゲーションボタンから更新する
  const [positionNumber, _] = useState(1)

  const positions = [
    parseSFENPosition(initialPositionInSFEN),
  ]

  return (
    <div className={`${classNames.kifu_player}`}>
      <Hand pieces={positions[positionNumber - 1].whiteHand} color={Color.White} />
      <Board pieces={positions[positionNumber - 1].board} />
      <Hand pieces={positions[positionNumber - 1].blackHand} color={Color.Black} />
    </div>
  )
}
