import { expect, test } from 'vitest';
import { parseDrop, parseMove, parsePosition, parseSFEN } from './parse-sfen';
import Piece, { Type, Color } from './piece';
import Move from './move';
import Drop from './drop';

test('SFENから棋譜を生成する', () => {
  const positions = parseSFEN('position startpos moves 7g7f 5c5d resign')
  expect(positions).toHaveLength(3)

  const position1 = positions[0]
  expect(position1.board).toStrictEqual([
    [new Piece(Type.Lance, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.King, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.Lance, Color.White)],
    [null, new Piece(Type.Rook, Color.White), null, null, null, null, null, new Piece(Type.Bishop, Color.White), null],
    Array(9).fill(new Piece(Type.Pawn, Color.White)),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(new Piece(Type.Pawn, Color.Black)),
    [null, new Piece(Type.Bishop, Color.Black), null, null, null, null, null, new Piece(Type.Rook, Color.Black), null],
    [new Piece(Type.Lance, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.King, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.Lance, Color.Black)],
  ])

  const position2 = positions[1]
  expect(position2.board).toStrictEqual([
    [new Piece(Type.Lance, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.King, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.Lance, Color.White)],
    [null, new Piece(Type.Rook, Color.White), null, null, null, null, null, new Piece(Type.Bishop, Color.White), null],
    Array(9).fill(new Piece(Type.Pawn, Color.White)),
    Array(9).fill(null),
    Array(9).fill(null),
    [null, null, new Piece(Type.Pawn, Color.Black), ...Array(6).fill(null)],
    [...Array(2).fill(new Piece(Type.Pawn, Color.Black)), null, ...Array(6).fill(new Piece(Type.Pawn, Color.Black))],
    [null, new Piece(Type.Bishop, Color.Black), null, null, null, null, null, new Piece(Type.Rook, Color.Black), null],
    [new Piece(Type.Lance, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.King, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.Lance, Color.Black)],
  ])

  const position3 = positions[2]
  expect(position3.board).toStrictEqual([
    [new Piece(Type.Lance, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.King, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.Lance, Color.White)],
    [null, new Piece(Type.Rook, Color.White), null, null, null, null, null, new Piece(Type.Bishop, Color.White), null],
    [...Array(4).fill(new Piece(Type.Pawn, Color.White)), null, ...Array(4).fill(new Piece(Type.Pawn, Color.White))],
    [...Array(4).fill(null), new Piece(Type.Pawn, Color.White), ...Array(4).fill(null)],
    Array(9).fill(null),
    [null, null, new Piece(Type.Pawn, Color.Black), ...Array(6).fill(null)],
    [...Array(2).fill(new Piece(Type.Pawn, Color.Black)), null, ...Array(6).fill(new Piece(Type.Pawn, Color.Black))],
    [null, new Piece(Type.Bishop, Color.Black), null, null, null, null, null, new Piece(Type.Rook, Color.Black), null],
    [new Piece(Type.Lance, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.King, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.Lance, Color.Black)],
  ])
})

test('平手初期局面のSFENをパースする', () => {
  const position = parsePosition('lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1')

  expect(position.board).toStrictEqual([
    [new Piece(Type.Lance, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.King, Color.White), new Piece(Type.GoldGeneral, Color.White), new Piece(Type.SilverGeneral, Color.White), new Piece(Type.Knight, Color.White), new Piece(Type.Lance, Color.White)],
    [null, new Piece(Type.Rook, Color.White), null, null, null, null, null, new Piece(Type.Bishop, Color.White), null],
    Array(9).fill(new Piece(Type.Pawn, Color.White)),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(new Piece(Type.Pawn, Color.Black)),
    [null, new Piece(Type.Bishop, Color.Black), null, null, null, null, null, new Piece(Type.Rook, Color.Black), null],
    [new Piece(Type.Lance, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.King, Color.Black), new Piece(Type.GoldGeneral, Color.Black), new Piece(Type.SilverGeneral, Color.Black), new Piece(Type.Knight, Color.Black), new Piece(Type.Lance, Color.Black)],
  ])
  expect(position.blackHand).toStrictEqual([])
  expect(position.whiteHand).toStrictEqual([])
})

test('持ち駒を含む局面のSFENをパースする', () => {
  const position = parsePosition('4k4/9/4G4/9/9/9/9/9/9 b Gg2 1')

  expect(position.board).toStrictEqual([
    [null, null, null, null, new Piece(Type.King, Color.White), null, null, null, null],
    Array(9).fill(null),
    [null, null, null, null, new Piece(Type.GoldGeneral, Color.Black), null, null, null, null],
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(null),
    Array(9).fill(null),
  ])
  expect(position.blackHand).toStrictEqual([
    new Piece(Type.GoldGeneral, Color.Black),
  ])
  expect(position.whiteHand).toStrictEqual([
    new Piece(Type.GoldGeneral, Color.White),
    new Piece(Type.GoldGeneral, Color.White),
  ])
})

test('指し手のSFENをパースする', () => {
  expect(parseMove('7g7f')).toStrictEqual(new Move([7, 7], [7, 6]))
})

test('駒が成る指し手のSFENをパースする', () => {
  expect(parseMove('8h2b+')).toStrictEqual(new Move([8, 8], [2, 2], { promoted: true }))
})

test('持ち駒を打つ指し手のSFENをパースする', () => {
  expect(parseDrop('G*5b')).toStrictEqual(new Drop(Type.GoldGeneral, Color.Black, [5, 2]))
})
