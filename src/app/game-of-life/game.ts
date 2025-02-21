export const WIDTH = 250
export const HEIGHT = 150
const INITIAL_POPULATION = 4000

export type Cells = {
  [key: number]: number[]
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomCell(): [x: number, y: number] {
  const x = randomIntFromInterval(0, WIDTH)
  const y = randomIntFromInterval(0, HEIGHT)
  return [x, y]
}

export function initializeCells(): Cells {
  const cells: Cells = {}
  let i = 0
  while (i < INITIAL_POPULATION) {
    const [x, y] = getRandomCell()
    if (cells[x] && cells[x].find((c) => c === y)) continue
    if (!cells[x]) cells[x] = []
    cells[x].push(y)
    i++
  }

  return cells
}

export function countLiveNeighbors(
  { x, y }: { x: number; y: number },
  livingCells: Cells
): number {
  let count = 0
  if (livingCells[x - 1]) {
    livingCells[x - 1].find((n) => n === y - 1) && count++
    livingCells[x - 1].find((n) => n === y) && count++
    livingCells[x - 1].find((n) => n === y + 1) && count++
  }
  if (livingCells[x]) {
    livingCells[x].find((n) => n === y - 1) && count++
    livingCells[x].find((n) => n === y + 1) && count++
  }
  if (livingCells[x + 1]) {
    livingCells[x + 1].find((n) => n === y - 1) && count++
    livingCells[x + 1].find((n) => n === y) && count++
    livingCells[x + 1].find((n) => n === y + 1) && count++
  }
  return count
}

export function updateCells(cells: Cells) {
  let nextGeneration: Cells = {}
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      const livingNeighbors = countLiveNeighbors({ x, y }, cells)
      const isAlive = !!cells[x] && cells[x].findIndex((n) => n === y) >= 0
      if (isAlive) {
        if (livingNeighbors === 2 || livingNeighbors === 3) {
          Array.isArray(nextGeneration[x])
            ? nextGeneration[x].push(y)
            : (nextGeneration = { ...nextGeneration, [x]: [y] })
        }
      } else if (livingNeighbors === 3) {
        Array.isArray(nextGeneration[x])
          ? nextGeneration[x].push(y)
          : (nextGeneration = { ...nextGeneration, [x]: [y] })
      }
    }
  }
  return nextGeneration
}
