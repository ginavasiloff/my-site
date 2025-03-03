import Link from 'next/link'
import styles from './navbar.module.css'

export const Navbar = ({}) => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.home}>
        <h1>Gina Vasiloff</h1>
        <span>software engineer</span>
      </Link>
      <ul>
        <li>
          <Link href="/cats">Local Cats</Link>
        </li>
        <li>
          <Link href="/game-of-life">Game of Life</Link>
        </li>
      </ul>
    </nav>
  )
}
