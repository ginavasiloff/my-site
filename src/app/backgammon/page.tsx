import styles from './page.module.css'
import { Board } from './components/board'
import { startingPositions } from './backgammon'

import flags from '../../flags'
import { notFound } from 'next/navigation'

export default function Home() {
  const isBackgammonEnabled = flags.isEnabled('backgammon')
  return isBackgammonEnabled ? (
    <main className={styles.main}>
      <Board positions={startingPositions} />
    </main>
  ) : (
    notFound()
  )
}
