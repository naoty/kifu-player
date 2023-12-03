import Board from "./board";
import classNames from "./kifu-player.module.css";
import clsx from "clsx";
import NavigationButton from "./navigation-button";

export default function EmptyPlayer({ className }: { className?: string }) {
  return (
    <div className={clsx('kifu-player', classNames.kifu_player, className)}>
      <Board
        pieces={[]}
        className={`${classNames.board}`}
      />
      <nav className={`${classNames.navigation}`}>
        <NavigationButton />
      </nav>
    </div>
  )
}
