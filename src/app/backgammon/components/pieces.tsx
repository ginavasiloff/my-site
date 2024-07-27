import { PLAYER_1 } from '../backgammon'
import { Coordinates, Positions } from '../types'

export const Pieces = ({
  positions,
  dx,
  coordinates,
}: {
  positions: Positions
  trimWidth: number
  dx: number
  coordinates: Coordinates
}) => {
  const r = (dx / 2) * 0.9
  return Object.keys(positions.spaces).map((n) => {
    const { player, count } = positions.spaces[n]
    const color = player === PLAYER_1 ? 'white' : 'red'
    const idx = parseInt(n)
    const cx = coordinates[idx][2][0]
    let circles = []
    for (let i = 0; i < count; i++) {
      const cy =
        idx > 12
          ? coordinates[idx][1][1] + 2 * r * i + r
          : coordinates[idx][1][1] - 2 * r * i - r
      circles.push(<circle id={n} key={n} fill={color} r={r} cy={cy} cx={cx} />)
    }
    return circles
  })
}
