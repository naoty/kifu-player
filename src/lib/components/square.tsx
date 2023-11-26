import type { ReactNode } from "react";
import classNames from './square.module.css'

type Props = {
  children?: ReactNode,
}

export default function Square({ children }: Props) {
  return (
    <td className={`${classNames.square}`}>
      {children}
    </td>
  )
}
