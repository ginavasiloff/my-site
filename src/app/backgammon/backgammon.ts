type Positions = {
  [position: number]: { player: string; count: number }
  rail: { [player: string]: number }
}

const PLAYER_1 = 'a'
const PLAYER_2 = 'b'

const startingPositions: Positions = {
  1: { player: PLAYER_2, count: 2 },
  6: { player: PLAYER_1, count: 5 },
  8: { player: PLAYER_1, count: 3 },
  12: { player: PLAYER_2, count: 5 },
  13: { player: PLAYER_1, count: 5 },
  17: { player: PLAYER_2, count: 3 },
  19: { player: PLAYER_2, count: 5 },
  24: { player: PLAYER_1, count: 2 },
  rail: {},
}

export const setupBackgammon = () => {
  return { positions: startingPositions }
}

type MoveArgs = {
  player: string
  spaces: number
  from: number
  to: number
  positions: Positions
}

export const isPlayerHome = (player: string, positions: Positions): boolean => {
  const isPlayerOnRail = positions.rail[player] > 0
  const homePositions =
    player === PLAYER_1 ? [1, 2, 3, 4, 5, 6] : [19, 20, 21, 22, 23, 24]
  if (isPlayerOnRail) return false
  const homeCount = homePositions.reduce((count, position) => {
    const current = positions[position]
    if (current?.player === player) return count + current.count
    return count
  }, 0)
  return homeCount === 15
}

export const move = (moveArgs: MoveArgs): Positions => {
  return moveArgs.positions
}
