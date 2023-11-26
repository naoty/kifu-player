import { describe, expect, test } from "vitest";
import Piece, { Color, Type } from "./piece";
import Move from "./move";
import Position from "./position";

describe('PositionとMoveから新しいPositionを生成する', () => {
  test('何もないマスに移動する', () => {
    const position = new Position(
      [
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        [new Piece(Type.Pawn, Color.Black), ...Array(8).fill(null)],
      ],
      [],
      []
    )
    const move = new Move([9, 9], [9, 8])
    const newPosition = position.applyMove(move)
    expect(newPosition.board).toStrictEqual([
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      [new Piece(Type.Pawn, Color.Black), ...Array(8).fill(null)],
      Array(9).fill(null),
    ])
  })

  test('相手の駒を取って持ち駒に加える', () => {
    const position = new Position(
      [
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        [...Array(5).fill(null), new Piece(Type.SilverGeneral, Color.White), ...Array(3).fill(null)],
        [...Array(4).fill(null), new Piece(Type.GoldGeneral, Color.Black), ...Array(4).fill(null)],
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
      ],
      [],
      []
    )
    const move = new Move([5, 5], [4, 4])
    const newPosition = position.applyMove(move)
    expect(newPosition.board).toStrictEqual([
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      [...Array(5).fill(null), new Piece(Type.GoldGeneral, Color.Black), ...Array(3).fill(null)],
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
    ])
    expect(newPosition.blackHand).toStrictEqual([
      new Piece(Type.SilverGeneral, Color.Black),
    ])
  })

  test('移動した駒を成る', () => {
    const position = new Position(
      [
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        [null, new Piece(Type.Rook, Color.Black), ...Array(7).fill(null)],
        Array(9).fill(null),
      ],
      [],
      []
    )
    const move = new Move([8, 8], [8, 2], { promoted: true })
    const newPosition = position.applyMove(move)
    expect(newPosition.board).toStrictEqual([
      Array(9).fill(null),
      [null, new Piece(Type.Rook, Color.Black, { promoted: true }), ...Array(7).fill(null)],
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
      Array(9).fill(null),
    ])
  })
})
