import { Board } from './components/board'
import { startingPositions } from './backgammon'

import flags from '../../flags'
import { notFound } from 'next/navigation'

export default function Home() {
  const isEnabled = flags.isEnabled('backgammon')
  return isEnabled ? <Board positions={startingPositions} /> : notFound()
}
