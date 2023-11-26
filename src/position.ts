import Piece, { Color } from "./piece";
import type { Nullable } from "./nullable";
import Move from "./move";

export default class Position {
  board: Nullable<Piece>[][]
  blackHand: Piece[]
  whiteHand: Piece[]

  constructor(board: Nullable<Piece>[][], blackHand: Piece[], whiteHand: Piece[]) {
    this.board = board
    this.blackHand = blackHand
    this.whiteHand = whiteHand
  }

  applyMove(move: Move): Position {
    const newBoard = [...this.board]
    const newBlackHand = [...this.blackHand]
    const newWhiteHand = [...this.whiteHand]

    const sourcePiece = newBoard[move.source[1] - 1][9 - move.source[0]]
    const destinationPiece = newBoard[move.destination[1] - 1][9 - move.destination[0]]

    if (destinationPiece?.color === Color.Black) {
      destinationPiece.color = Color.White
      newWhiteHand.push(destinationPiece)
    } else if (destinationPiece?.color === Color.White) {
      destinationPiece.color = Color.Black
      newBlackHand.push(destinationPiece)
    }

    if (sourcePiece && move.promoted) {
      sourcePiece.promoted = true
    }

    newBoard[move.source[1] - 1][9 - move.source[0]] = null
    newBoard[move.destination[1] - 1][9 - move.destination[0]] = sourcePiece

    return new Position(newBoard, newBlackHand, newWhiteHand)
  }
}
