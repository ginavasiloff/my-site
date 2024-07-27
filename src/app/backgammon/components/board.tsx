import { Coordinates, Positions } from '../types'
import { Pieces } from './pieces'

const boardColor = 'rgb(248, 195, 157)'
const boardTrim = 'rgb(139, 70, 36)'

type BoardDimensions = {
  width: number
  height: number
  trimWidth: number
  dx: number
}

const calculateTriangleCoordinates = ({
  width,
  height,
  trimWidth,
  dx,
}: BoardDimensions): Coordinates => {
  const y0 = trimWidth
  const y2 = (height - trimWidth * 2) / 2 - height * 0.1
  const y3 = (height - trimWidth * 2) / 2 + height * 0.1
  const y4 = height - trimWidth

  let triangleCoordinates = {}
  for (let i = 0; i < 6; i++) {
    const x0 = trimWidth + i * dx
    const x1 = x0 + dx
    const x2 = x0 + dx / 2
    const x3 = width / 2 + x0
    const x4 = x3 + dx
    const x5 = x4 - dx / 2

    triangleCoordinates = {
      ...triangleCoordinates,
      [6 - i]: [
        [x3, y4],
        [x4, y4],
        [x5, y3],
      ],
      [12 - i]: [
        [x0, y4],
        [x1, y4],
        [x2, y3],
      ],
      [i + 13]: [
        [x0, y0],
        [x1, y0],
        [x2, y2],
      ],
      [i + 19]: [
        [x3, y0],
        [x4, y0],
        [x5, y2],
      ],
    }
  }
  return triangleCoordinates
}

const Triangles = ({ coordinates }: { coordinates: Coordinates }) => {
  return Object.keys(coordinates).map((key, i) => {
    const points = coordinates[key]
    return (
      <polygon
        data-testid={i}
        key={i}
        points={points.join(', ')}
        fill={boardTrim}
      />
    )
  })
}

export const Board = ({ positions }: { positions: Positions }) => {
  const trimWidth = 1
  const width = 100
  const height = 100
  const dx = (width - trimWidth * 4) / 12

  const triangleCoordinates = calculateTriangleCoordinates({
    width,
    height,
    trimWidth,
    dx,
  })

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      data-testid={'backgammon-board'}
      width={width * 4}
      height={height * 4}
    >
      <g>
        <rect width={width} height={height} x="0" y="0" fill={boardTrim} />
        <rect
          width={width - trimWidth * 2}
          height={height - trimWidth * 2}
          x={trimWidth}
          y={trimWidth}
          fill={boardColor}
        />
        <rect
          width={trimWidth * 2}
          height={height}
          x={width / 2 - trimWidth}
          y="0"
          fill={boardTrim}
        />
      </g>
      <Triangles coordinates={triangleCoordinates} />
      <Pieces
        positions={positions}
        coordinates={triangleCoordinates}
        dx={dx}
        trimWidth={trimWidth}
      />
    </svg>
  )
}
