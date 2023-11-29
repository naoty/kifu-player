import type { ReactNode } from "react";
import clsx from "clsx";
import classNames from './square.module.css'

type Props = {
  children?: ReactNode,
}

export default function Square({ children }: Props) {
  return (
    <td className={clsx('square', classNames.square)}>
      {children}
    </td>
  )
}
