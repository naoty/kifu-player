import Position from "./position";
import Piece, { Color, Type } from "./piece";
import type { Nullable } from "./nullable";

export function parseSFENPosition(sfen: string): Position {
  const tokens = sfen.split(' ')
  
  const board = []
  const sfenPosition = tokens[0]
  const sfenRows = sfenPosition.split('/')
  for (const sfenRow of sfenRows) {
    let row: Nullable<Piece>[] = []

    for (let i = 0; i < sfenRow.length; i++) {
      const char = sfenRow[i]

      const piece = pieceFromSFENLetter(char)
      if (piece) {
        row.push(piece)
        continue
      }

      if (char.match(/^\d$/)) {
        const emptyLength = Number(char)
        const empties = Array(emptyLength).fill(null)
        row = [...row, ...empties]
        continue
      }
    }

    board.push(row)
  }

  const blackHand: Piece[] = []
  const whiteHand: Piece[] = []
  const sfenHands = tokens[2]
  let lastHandPiece = null
  for (let i = 0; i < sfenHands.length; i++) {
    const char = sfenHands[i]

    if (char === '-') {
      break
    }

    const piece = pieceFromSFENLetter(char)
    if (piece) {
      lastHandPiece = piece
      if (piece.color === Color.Black) {
        blackHand.push(piece)
      } else if (piece.color === Color.White) {
        whiteHand.push(piece)
      }
    }

    if (char.match(/^\d$/)) {
      const handNumber = Number(char)
      if (lastHandPiece?.color === Color.Black) {
        blackHand.push(...Array(handNumber - 1).fill(lastHandPiece))
      } else if (lastHandPiece?.color === Color.White) {
        whiteHand.push(...Array(handNumber - 1).fill(lastHandPiece))
      }
    }
  }

  return new Position(board, blackHand, whiteHand)
}

function pieceFromSFENLetter(letter: string): Piece | null {
  switch (letter) {
    case 'K':
      return new Piece(Type.King, Color.Black)
    case 'k':
      return new Piece(Type.King, Color.White)
    case 'R':
      return new Piece(Type.Rook, Color.Black)
    case 'r':
      return new Piece(Type.Rook, Color.White)
    case 'B':
      return new Piece(Type.Bishop, Color.Black)
    case 'b':
      return new Piece(Type.Bishop, Color.White)
    case 'G':
      return new Piece(Type.GoldGeneral, Color.Black)
    case 'g':
      return new Piece(Type.GoldGeneral, Color.White)
    case 'S':
      return new Piece(Type.SilverGeneral, Color.Black)
    case 's':
      return new Piece(Type.SilverGeneral, Color.White)
    case 'N':
      return new Piece(Type.Knight, Color.Black)
    case 'n':
      return new Piece(Type.Knight, Color.White)
    case 'L':
      return new Piece(Type.Lance, Color.Black)
    case 'l':
      return new Piece(Type.Lance, Color.White)
    case 'P':
      return new Piece(Type.Pawn, Color.Black)
    case 'p':
      return new Piece(Type.Pawn, Color.White)
    default:
      return null
  }
}
