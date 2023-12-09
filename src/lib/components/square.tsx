import type { ReactNode } from "react";
import clsx from "clsx";
import classNames from './square.module.css'

type Props = {
  isDestination?: boolean,
  isRightEdge?: boolean,
  isBottomEdge?: boolean,
  children?: ReactNode,
}

export default function Square({ isDestination, isRightEdge, isBottomEdge, children }: Props) {
  return (
    <div className={clsx(
      'square',
      classNames.square,
      isDestination && classNames.destination,
      isRightEdge && classNames.right_edge,
      isBottomEdge && classNames.bottom_edge,
    )}>
      {children}
    </div>
  )
}
