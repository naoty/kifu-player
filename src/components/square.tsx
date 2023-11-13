import type { ReactNode } from "react";
import classNames from './square.module.css'

export default function Square({ children }: { children?: ReactNode }) {
  return (
    <td className={`${classNames.square}`}>
      {children}
    </td>
  )
}
