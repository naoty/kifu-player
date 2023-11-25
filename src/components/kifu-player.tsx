import { useState } from "react";
import classNames from "./kifu-player.module.css";
import Board from "./board";
import Hand from "./hand";
import { parseSFENPosition } from "../parse-sfen";
import { Color } from "../piece";

export default function KifuPlayer({ sfen }: { sfen: string }) {
  // TODO: ナビゲーションボタンから更新する
  const [positionNumber, _] = useState(1)

  // TODO: 棋譜全体をSFENから生成する
  const positions = [
    parseSFENPosition(sfen),
  ]

  return (
    <div className={`${classNames.kifu_player}`}>
      <Hand pieces={positions[positionNumber - 1].whiteHand} color={Color.White} />
      <Board pieces={positions[positionNumber - 1].board} />
      <Hand pieces={positions[positionNumber - 1].blackHand} color={Color.Black} />
    </div>
  )
}
