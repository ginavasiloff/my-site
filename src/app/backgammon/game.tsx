import { startingPositions } from './backgammon'
import { Board } from './components/board'

export const Game = () => {
  return <Board positions={startingPositions} />
}
