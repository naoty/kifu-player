import type { ReactNode } from "react";
import clsx from "clsx";
import classNames from './square.module.css'

type Props = {
  isDestination: boolean,
  children?: ReactNode,
}

export default function Square({ isDestination, children }: Props) {
  return (
    <div className={clsx('square', classNames.square, isDestination && classNames.destination)}>
      {children}
    </div>
  )
}
