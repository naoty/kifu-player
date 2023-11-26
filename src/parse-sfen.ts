import Position from "./position";
import Piece, { Color, Type } from "./piece";
import Move from "./move";
import Drop from "./drop";
import type { Coordinate } from "./coordinate";
import type { Nullable } from "./nullable";

export function parseSFEN(sfen: string): Position[] {
  const positions: Position[] = []

  const tokens = sfen.split(' ')

  const initialPositionSfen = tokens[1]
  switch (initialPositionSfen) {
    case 'startpos':
      positions.push(evenInitialPosition)
      break
    case 'sfen':
      const positionInSFEN = tokens.slice(2, 5).join(' ')
      positions.push(parsePosition(positionInSFEN))
      break
  }

  const movesIndex = tokens.indexOf('moves')

  if (movesIndex === -1) {
    return positions
  }

  for (const moveToken of tokens.slice(movesIndex + 1)) {
    // 投了
    if (moveToken === 'resign') {
      break
    }

    // 持ち駒
    if (moveToken[1] === '*') {
      const drop = parseDrop(moveToken)
      const nextPosition = positions[positions.length - 1].applyDrop(drop)
      positions.push(nextPosition)
      continue
    }

    const move = parseMove(moveToken)
    const nextPosition = positions[positions.length - 1].applyMove(move)
    positions.push(nextPosition)
  }

  return positions
}

export function parsePosition(sfen: string): Position {
  const tokens = sfen.split(' ')
  
  const board = []
  const sfenPosition = tokens[0]
  const sfenRows = sfenPosition.split('/')
  for (const sfenRow of sfenRows) {
    let row: Nullable<Piece>[] = []

    for (let i = 0; i < sfenRow.length; i++) {
      const char = sfenRow[i]

      const piece = parsePiece(char)
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

    const piece = parsePiece(char)
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

export function parseMove(sfen: string): Move {
  const source = parseCoordinate(sfen.substring(0, 2))
  const destination = parseCoordinate(sfen.substring(2, 4))
  const plus = sfen.at(4)

  const move = new Move(source, destination)
  if (plus) {
    move.promoted = true
  }

  return move
}

export function parseDrop(sfen: string): Drop {
  const piece = parsePiece(sfen[0])
  const destination = parseCoordinate(sfen.substring(2, 4))

  return new Drop(piece!.type, piece!.color, destination)
}

function parsePiece(sfen: string): Piece | null {
  switch (sfen) {
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
      // TODO: 例外をthrowする
      return null
  }
}

function parseCoordinate(sfen: string): Coordinate {
  let column = Number(sfen[0])
  switch (sfen[1]) {
    case 'a':
      return [column, 1]
    case 'b':
      return [column, 2]
    case 'c':
      return [column, 3]
    case 'd':
      return [column, 4]
    case 'e':
      return [column, 5]
    case 'f':
      return [column, 6]
    case 'g':
      return [column, 7]
    case 'h':
      return [column, 8]
    case 'i':
      return [column, 9]
    default:
      // TODO: 例外をthrowする
      return [0, 0]
  }
}

const evenInitialPosition: Position = new Position(
  [
    [new Piece(Type.Lance, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.King, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.Lance, Color.White)],
    [null, new Piece(Type.Rook, Color.White), null, null, null, null, null, new Piece(Type.Bishop, Color.White), null],
    Array(9).fill(new Piece(Type.Pawn, Color.White)),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(new Piece(Type.Pawn, Color.Black)),
    [null, new Piece(Type.Bishop, Color.Black), null, null, null, null, null, new Piece(Type.Rook, Color.Black), null],
    [new Piece(Type.Lance, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.King, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.Lance, Color.Black)],
  ],
  [],
  []
)
