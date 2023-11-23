import type { ReactNode } from "react";
import clsx from "clsx";
import classNames from './square.module.css'

type Props = {
  children?: ReactNode,
  selected?: boolean,
}

export default function Square({ children, selected = false }: Props) {
  return (
    <td className={clsx(
      classNames.square,
      selected && classNames.selected,

    )}>
      {children}
    </td>
  )
}
