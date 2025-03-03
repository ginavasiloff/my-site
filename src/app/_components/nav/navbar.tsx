import Link from 'next/link'
import styles from './navbar.module.css'

export const Navbar = ({}) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <h1>Gina Vasiloff</h1>
            <span>software engineer</span>
          </Link>
        </li>
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
