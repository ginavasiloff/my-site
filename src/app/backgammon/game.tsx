import { startingPositions } from './backgammon'
import { Board } from './board'

export const Game = () => {
  return <Board positions={startingPositions} />
}
