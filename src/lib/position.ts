import Piece, { Color } from "./piece";
import Move from "./move";
import Drop from "./drop";
import type { Nullable } from "./nullable";

export default class Position {
  board: Nullable<Piece>[][]
  blackHand: Piece[]
  whiteHand: Piece[]
  nextTurn: Color

  constructor(board: Nullable<Piece>[][], blackHand: Piece[], whiteHand: Piece[], nextTurn = Color.Black) {
    this.board = board
    this.blackHand = blackHand
    this.whiteHand = whiteHand
    this.nextTurn = nextTurn
  }

  applyMove(move: Move): Position {
    const newPosition = this.deepCopy()

    const sourcePiece = newPosition.board[move.source[1] - 1][9 - move.source[0]]
    const destinationPiece = newPosition.board[move.destination[1] - 1][9 - move.destination[0]]

    if (destinationPiece?.color === Color.Black) {
      destinationPiece.color = Color.White
      destinationPiece.promoted = false
      newPosition.whiteHand.push(destinationPiece)
    } else if (destinationPiece?.color === Color.White) {
      destinationPiece.color = Color.Black
      destinationPiece.promoted = false
      newPosition.blackHand.push(destinationPiece)
    }

    if (sourcePiece && move.promoted) {
      sourcePiece.promoted = true
    }

    newPosition.board[move.source[1] - 1][9 - move.source[0]] = null
    newPosition.board[move.destination[1] - 1][9 - move.destination[0]] = sourcePiece

    newPosition.nextTurn = this.nextTurn === Color.Black ? Color.White : Color.Black

    return newPosition
  }

  applyDrop(drop: Drop): Position {
    const newPosition = this.deepCopy()

    newPosition.board[drop.destination[1] - 1][9 - drop.destination[0]] = new Piece(drop.type, drop.color)

    if (drop.color === Color.Black) {
      const index = newPosition.blackHand.findIndex((piece) => piece.type === drop.type)
      if (index > -1) {
        newPosition.blackHand.splice(index, 1)
      }
    } else if (drop.color === Color.White) {
      const index = newPosition.whiteHand.findIndex((piece) => piece.type === drop.type)
      if (index > -1) {
        newPosition.whiteHand.splice(index, 1)
      }
    }

    newPosition.nextTurn = this.nextTurn === Color.Black ? Color.White : Color.Black

    return newPosition
  }

  deepCopy(): Position {
    const board: Nullable<Piece>[][] = []
    for (const row of this.board) {
      const pieces: Nullable<Piece>[] = []
      for (const piece of row) {
        if (piece) {
          pieces.push(piece.deepCopy())
        } else {
          pieces.push(null)
        }
      }
      board.push(pieces)
    }

    const blackHand: Piece[] = []
    for (const piece of this.blackHand) {
      blackHand.push(piece.deepCopy())
    }

    const whiteHand: Piece[] = []
    for (const piece of this.whiteHand) {
      whiteHand.push(piece.deepCopy())
    }

    return new Position(board, blackHand, whiteHand)
  }
}
