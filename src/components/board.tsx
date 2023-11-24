import classNames from './board.module.css';
import Square from './square';
import RowNumber from './row-number';
import ColumnNumber from './column-number';
import PieceComponent from './piece';
import type { Position } from '../position';
import { numberToKanji } from '../kanji-number';

export default function Board({ position }: { position: Position }) {
  const squares = []

  const columnNumberRow = []
  for (let column = 9; column >= 1; column--) {
    columnNumberRow.push(<ColumnNumber key={column} value={`${column}`} />)
  }
  squares.push(<tr key={0}>{...columnNumberRow}</tr>)

  for (let row = 0; row <= 8; row++) {
    const squareRow = []
    for (let column = 0; column <= 8; column++) {
      const key = (9 - column) * 10 + (row + 1)
      const piece = position[row][column]
      if (piece) {
        squareRow.push(<Square key={key}><PieceComponent piece={piece} /></Square>)
      } else {
        squareRow.push(<Square key={key}></Square>)
      }
    }
    squareRow.push(<RowNumber key={row + 1} value={numberToKanji(row + 1)} />)
    squares.push(<tr key={row + 1}>{...squareRow}</tr>)
  }

  return (
    <table className={`${classNames.board}`}>
      <tbody>
        {...squares}
      </tbody>
    </table>
  )
}
