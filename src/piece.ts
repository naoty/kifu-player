export default class Piece {
  type: Type
  color: Color
  promoted: boolean = false

  constructor(type: Type, color: Color) {
    this.type = type
    this.color = color
  }

  get orderInHand(): number {
    switch (this.type) {
      case Type.King:
        return 0
      case Type.Rook:
        return 1
      case Type.Bishop:
        return 2
      case Type.GoldGeneral:
        return 3
      case Type.SilverGeneral:
        return 4
      case Type.Knight:
        return 5
      case Type.Lance:
        return 6
      case Type.Pawn:
        return 7
    }
  }

  toString(): string {
    if (this.type === Type.King) {
      return this.color === Color.Black ? '王' : '玉'
    } else if (this.type === Type.Rook) {
      return this.promoted ? '龍' : '飛'
    } else if (this.type === Type.Bishop) {
      return this.promoted ? '馬' : '角'
    } else if (this.type === Type.GoldGeneral) {
      return '金'
    } else if (this.type === Type.SilverGeneral) {
      return this.promoted ? '全' : '銀'
    } else if (this.type === Type.Knight) {
      return this.promoted ? '圭' : '桂'
    } else if (this.type === Type.Lance) {
      return this.promoted ? '杏' : '香'
    } else if (this.type === Type.Pawn) {
      return this.promoted ? 'と' : '歩'
    } else {
      return ''
    }
  }
}

export enum Type {
  King,
  Rook,
  Bishop,
  GoldGeneral,
  SilverGeneral,
  Knight,
  Lance,
  Pawn,
}

export enum Color {
  Black,
  White,
}
