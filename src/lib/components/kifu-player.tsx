import { useState } from "react";
import classNames from "./kifu-player.module.css";
import Board from "./board";
import Hand from "./hand";
import NavigationButton from "./navigation-button";
import { parseSFEN } from "../parse-sfen";
import { Color } from "../piece";

export default function KifuPlayer({ sfen }: { sfen: string }) {
  const positions = parseSFEN(sfen)
  const [positionNumber, setPositionNumber] = useState(1)

  const onBackButtonClick = () => {
    if (positionNumber > 1) {
      setPositionNumber(positionNumber - 1)
    }
  }

  const onNextButtonClick = () => {
    if (positionNumber < positions.length) {
      setPositionNumber(positionNumber + 1)
    }
  }

  return (
    <div className={`${classNames.kifu_player}`}>
      <Hand
        pieces={positions[positionNumber - 1].whiteHand}
        color={Color.White}
        className={`${classNames.white_hand}`}
      />
      <Board
        pieces={positions[positionNumber - 1].board}
        className={`${classNames.board}`}
      />
      <Hand
        pieces={positions[positionNumber - 1].blackHand}
        color={Color.Black}
        className={`${classNames.black_hand}`}
      />
      <nav className={`${classNames.navigation}`}>
        <NavigationButton
          onBackButtonClick={onBackButtonClick}
          onNextButtonClick={onNextButtonClick}
        />
      </nav>
    </div>
  )
}
