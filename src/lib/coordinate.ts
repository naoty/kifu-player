export type Coordinate = [number, number]

export function equals(a: Coordinate | undefined | null, b: Coordinate | undefined | null): boolean {
  if (a == null || b == null) {
    return false
  }

  return a[0] === b[0] && a[1] === b[1]
}
