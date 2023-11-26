import { Coordinate } from "./coordinate"

export default class Move {
  source: Coordinate
  destination: Coordinate
  promoted: boolean

  constructor(source: Coordinate, destination: Coordinate, { promoted }: { promoted?: boolean } = {}) {
    this.source = source
    this.destination = destination
    this.promoted = promoted ?? false
  }
}
