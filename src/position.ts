import Piece from "./piece";
import type { Nullable } from "./nullable";

export default class Position {
  board: Nullable<Piece>[][]
  blackHand: Piece[]
  whiteHand: Piece[]

  constructor(board: Nullable<Piece>[][], blackHand: Piece[], whiteHand: Piece[]) {
    this.board = board
    this.blackHand = blackHand
    this.whiteHand = whiteHand
  }
}
