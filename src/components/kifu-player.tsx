import { useState } from "react";
import Board from "./board";
import { parseSFENPosition } from "../parse-sfen";

const initialPositionInSFEN = 'lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL'

export default function KifuPlayer() {
  // TODO: ナビゲーションボタンから更新する
  const [positionNumber, _] = useState(1)

  const positions = [
    parseSFENPosition(initialPositionInSFEN),
  ]

  return (
    <div>
      <Board position={positions[positionNumber - 1]} />
    </div>
  )
}
