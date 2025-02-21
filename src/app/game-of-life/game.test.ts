import { countLiveNeighbors, updateCells } from './game'

const cells1 = {
  0: [],
  1: [0, 2, 3, 4],
  2: [3],
  3: [0, 1, 2, 3, 4],
  4: [],
}

test('getLiveNeighbors', () => {
  const res1 = countLiveNeighbors({ x: 0, y: 0 }, cells1)
  const res2 = countLiveNeighbors({ x: 1, y: 2 }, cells1)
  const res3 = countLiveNeighbors({ x: 3, y: 4 }, cells1)
  const res4 = countLiveNeighbors({ x: 0, y: 3 }, cells1)
  expect(res1).toBe(0)
  expect(res2).toBe(2)
  expect(res3).toBe(2)
  expect(res4).toBe(3)
})
