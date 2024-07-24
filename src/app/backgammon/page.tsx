import styles from './page.module.css'
import { Board } from './board'
export default function Home() {
    return (
        <main className={styles.main}>
            <Board
                width={100}
                height={100}
                boardColor={'rgb(248, 195, 157)'}
                boardTrim={'rgb(139, 70, 36)'}
            />
        </main>
    )
}
