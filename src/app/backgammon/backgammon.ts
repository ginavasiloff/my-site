import { Positions } from './types'

export const PLAYER_1 = 'a'
export const PLAYER_2 = 'b'

export const startingPositions: Positions = {
  spaces: {
    '1': { player: PLAYER_1, count: 2 },
    '6': { player: PLAYER_2, count: 5 },
    '8': { player: PLAYER_2, count: 3 },
    '12': { player: PLAYER_1, count: 5 },
    '13': { player: PLAYER_2, count: 5 },
    '17': { player: PLAYER_1, count: 3 },
    '19': { player: PLAYER_1, count: 5 },
    '24': { player: PLAYER_2, count: 2 },
  },
  bar: {},
}

export const isPlayerHome = (player: string, positions: Positions): boolean => {
  const homePositions =
    player === PLAYER_1 ? [1, 2, 3, 4, 5, 6] : [19, 20, 21, 22, 23, 24]
  const homeCount = homePositions.reduce((count, position) => {
    const current = positions.spaces[position.toString()]
    if (current?.player === player) return count + current.count
    return count
  }, 0)
  return homeCount === 15
}

type MoveProps = {
  player: string
  from: string
  to: string
}

export const canMove = (
  moveProps: MoveProps,
  positions: Positions
): boolean => {
  if (positions.spaces[moveProps.from]?.player !== moveProps.player)
    return false
  if (positions.spaces[moveProps.to]?.player === moveProps.player) return true
  const targetCount = positions.spaces[moveProps.to]
    ? positions.spaces[moveProps.to].count
    : 0
  return targetCount <= 1
}
