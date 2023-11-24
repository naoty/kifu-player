import { expect, test } from 'vitest';
import { parseSFENPosition } from './parse-sfen';
import Piece, { Type, Color } from './piece';

test('parse SFEN position into even initial position', () => {
  expect(parseSFENPosition('lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL')).toStrictEqual([
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
})
