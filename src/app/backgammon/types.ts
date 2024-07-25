export type Positions = {
  spaces: { [position: string]: { player: string; count: number } }
  bar: { [player: string]: number }
}
