import Piece, { Color } from "./piece";
import type { Nullable } from "./nullable";
import Move from "./move";
import Drop from "./drop";

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

  applyDrop(drop: Drop): Position {
    const newBoard = [...this.board]
    const newBlackHand = [...this.blackHand]
    const newWhiteHand = [...this.whiteHand]

    newBoard[drop.destination[1] - 1][9 - drop.destination[0]] = new Piece(drop.type, drop.color)

    if (drop.color === Color.Black) {
      const index = newBlackHand.findIndex((piece) => piece.type === drop.type)
      if (index > -1) {
        newBlackHand.splice(index, 1)
      }
    } else if (drop.color === Color.White) {
      const index = newWhiteHand.findIndex((piece) => piece.type === drop.type)
      if (index > -1) {
        newWhiteHand.splice(index, 1)
      }
    }

    return new Position(newBoard, newBlackHand, newWhiteHand)
  }
}
