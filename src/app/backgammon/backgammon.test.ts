import { describe, expect, it } from 'vitest'
import { setupBackgammon, isPlayerHome } from './backgammon'

const startingPositions = {
  1: { player: 'b', count: 2 },
  6: { player: 'a', count: 5 },
  8: { player: 'a', count: 3 },
  12: { player: 'b', count: 5 },
  13: { player: 'a', count: 5 },
  17: { player: 'b', count: 3 },
  19: { player: 'b', count: 5 },
  24: { player: 'a', count: 2 },
  rail: {},
}

describe('setupBackgammon', () => {
  const { positions } = setupBackgammon()
  it('starting positions', () => {
    expect(positions).toEqual(startingPositions)
  })
  it('each player has 15 pieces', () => {
    const aCount = Object.values(positions)
      .filter((o) => o.player === 'a')
      .reduce((acc, o) => acc + o.count, 0)
    const bCount = Object.values(positions)
      .filter((o) => o.player === 'b')
      .reduce((acc, o) => acc + o.count, 0)
    expect(positions).toEqual(startingPositions)

    expect(aCount).toEqual(15)
    expect(bCount).toEqual(15)
  })
})

describe('isPlayerHome', () => {
  it('returns false if the player has pieces not in the home board', () => {
    const { positions } = setupBackgammon()
    expect(isPlayerHome('a', positions)).toBeFalsy()
    expect(isPlayerHome('b', positions)).toBeFalsy()
  })
  it("return true if all of a player's pieces are in their home board", () => {
    const positions = {
      1: { player: 'b', count: 2 },
      6: { player: 'a', count: 15 },
      12: { player: 'b', count: 5 },
      17: { player: 'b', count: 3 },
      19: { player: 'b', count: 5 },
      rail: {},
    }
    const res = isPlayerHome('a', positions)
    expect(res).toBeTruthy()
  })
  it('returns false if a player has a piece on the rail', () => {
    const positions = {
      1: { player: 'b', count: 2 },
      6: { player: 'a', count: 14 },
      12: { player: 'b', count: 5 },
      17: { player: 'b', count: 3 },
      19: { player: 'b', count: 5 },
      rail: { a: 1 },
    }
    const res = isPlayerHome('a', positions)
    expect(res).toBeFalsy()
  })
})
