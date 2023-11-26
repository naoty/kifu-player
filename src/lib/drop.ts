import { Coordinate } from "./coordinate";
import { Color, Type } from "./piece";

export default class Drop {
  type: Type
  color: Color
  destination: Coordinate

  constructor(type: Type, color: Color, destination: Coordinate) {
    this.type = type
    this.color = color
    this.destination = destination
  }
}
