import { canMove, startingPositions, isPlayerHome } from './backgammon'

describe('setupBackgammon', () => {
  it('starting positions', () => {
    const PLAYER_1 = 'a'
    const PLAYER_2 = 'b'
    const positions = {
      spaces: {
        '1': { player: PLAYER_2, count: 2 },
        '6': { player: PLAYER_1, count: 5 },
        '8': { player: PLAYER_1, count: 3 },
        '12': { player: PLAYER_2, count: 5 },
        '13': { player: PLAYER_1, count: 5 },
        '17': { player: PLAYER_2, count: 3 },
        '19': { player: PLAYER_2, count: 5 },
        '24': { player: PLAYER_1, count: 2 },
      },
      bar: {},
    }
    expect(positions).toEqual(startingPositions)
  })
  it('each player has 15 pieces', () => {
    const spaceValues = Object.values(startingPositions.spaces)
    const aCount = spaceValues
      .filter((o) => o.player === 'a')
      .reduce((acc, o) => acc + o.count, 0)
    const bCount = spaceValues
      .filter((o) => o.player === 'b')
      .reduce((acc, o) => acc + o.count, 0)
    expect(aCount).toEqual(15)
    expect(bCount).toEqual(15)
  })
})

describe('isPlayerHome', () => {
  it('returns false if the player has pieces not in the home board', () => {
    const positions = startingPositions
    expect(isPlayerHome('a', positions)).toBeFalsy()
    expect(isPlayerHome('b', positions)).toBeFalsy()
  })
  it("return true if all of a player's pieces are in their home board", () => {
    const positions = {
      spaces: {
        '1': { player: 'b', count: 2 },
        '6': { player: 'a', count: 15 },
        '12': { player: 'b', count: 5 },
        '17': { player: 'b', count: 3 },
        '19': { player: 'b', count: 5 },
      },
      bar: {},
    }
    const res = isPlayerHome('a', positions)
    expect(res).toBeTruthy()
  })
  it('returns false if a player has a piece on the bar', () => {
    const positions = {
      spaces: {
        '1': { player: 'b', count: 2 },
        '6': { player: 'a', count: 14 },
        '12': { player: 'b', count: 5 },
        '17': { player: 'b', count: 3 },
        '19': { player: 'b', count: 5 },
      },
      bar: { a: 1 },
    }
    const res = isPlayerHome('a', positions)
    expect(res).toBeFalsy()
  })
})

describe('canMove', () => {
  it('returns false if the moving player does not own the pieces in the source position', () => {
    const moveProps = { player: 'a', from: '1', to: '2' }
    const res = canMove(moveProps, startingPositions)
    expect(res).toBeFalsy()
  })
  it('returns true if one or fewer of the opponents pieces are in the destination position', () => {
    const positions = {
      spaces: {
        '1': { player: 'b', count: 2 },
        '2': { player: 'a', count: 1 },
        '6': { player: 'a', count: 14 },
        '12': { player: 'b', count: 5 },
        '17': { player: 'b', count: 3 },
        '19': { player: 'b', count: 5 },
      },
      bar: {},
    }
    const moveProps = { player: 'b', from: '1', to: '2' }
    const res = canMove(moveProps, positions)
    const moveProps2 = { player: 'b', from: '1', to: '3' }
    const res2 = canMove(moveProps2, positions)
    const moveProps3 = { player: 'b', from: '1', to: '12' }
    const res3 = canMove(moveProps3, positions)
    expect(res).toBeTruthy()
    expect(res2).toBeTruthy()
    expect(res3).toBeTruthy()
  })
})
