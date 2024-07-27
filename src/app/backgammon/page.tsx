import styles from './page.module.css'
import { Board } from './components/board'
import { startingPositions } from './backgammon'
export default function Home() {
  //   const emptyBoardPositions = { spaces: {}, bar: {} }
  return (
    <main className={styles.main}>
      <Board positions={startingPositions} />
    </main>
  )
}
