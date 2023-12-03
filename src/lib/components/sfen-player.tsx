import { useState } from "react";
import clsx from "clsx";
import classNames from "./kifu-player.module.css";
import Board from "./board";
import Hand from "./hand";
import NavigationButton from "./navigation-button";
import { parseSFEN } from "../parse-sfen";
import { Color } from "../piece";

export default function SFENPlayer({ sfen, className }: { sfen: string, className?: string }) {
  const positions = parseSFEN(sfen)
  const [positionNumber, setPositionNumber] = useState(1)
  const position = positions[positionNumber - 1]

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
    <div className={clsx('kifu-player', classNames.kifu_player, className)}>
      <Hand
        pieces={position.whiteHand}
        color={Color.White}
        className={`${classNames.white_hand}`}
      />
      <Board
        pieces={positions[positionNumber - 1].board}
        destination={position.destination}
        className={`${classNames.board}`}
      />
      <Hand
        pieces={position.blackHand}
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
