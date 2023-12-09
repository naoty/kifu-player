import clsx from 'clsx';
import classNames from './board.module.css';
import Square from './square';
import RowNumber from './row-number';
import ColumnNumber from './column-number';
import PieceComponent from './piece';
import Piece from '../piece';
import { Coordinate, equals } from '../coordinate';
import { Nullable } from '../nullable';
import { numberToKanji } from '../kanji-number';

type Props = {
  pieces: Nullable<Piece>[][],
  destination?: Coordinate | null,
  className?: string,
}

export default function Board({ pieces, destination, className }: Props) {
  const squares = []

  for (let column = 9; column >= 1; column--) {
    const key = `column-${column}`
    squares.push(<ColumnNumber key={key} value={`${column}`} />)
  }

  squares.push(<span></span>)

  for (let row = 0; row <= 8; row++) {
    for (let column = 0; column <= 8; column++) {
      const coordinate: Coordinate = [9 - column, row + 1]
      const key = coordinate[0] * 10 + coordinate[1]
      const piece = pieces.at(row)?.at(column)
      if (piece) {
        squares.push(
          <Square
            key={key}
            isDestination={equals(coordinate, destination)}
            isRightEdge={column == 8}
            isBottomEdge={row == 8}
          >
            <PieceComponent piece={piece} />
          </Square>
        )
      } else {
        squares.push(
          <Square
            key={key}
            isRightEdge={column == 8}
            isBottomEdge={row == 8}
          />
        )
      }
    }
    const key = `row-${row + 1}`
    squares.push(<RowNumber key={key} value={numberToKanji(row + 1)} />)
  }

  return (
    <div className={clsx('board', className, classNames.board)}>
      {...squares}
    </div>
  )
}
