import Image from 'next/image'
import { Cat, cats } from './cat-data'
import styles from './page.module.css'

const CatCard = ({ cat }: { cat: Cat }) => {
  return (
    <div className={styles.catItem}>
      <div className={styles.frame}>
        <span className={styles.corner} aria-hidden></span>
        <span className={styles.corner} aria-hidden></span>
        <span className={styles.corner} aria-hidden></span>
        <span className={styles.corner} aria-hidden></span>

        <Image alt={cat.name} {...cat} />
        <span>{cat.name}</span>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <section className={styles.gallery}>
      {cats.map((cat, i) => (
        <CatCard cat={cat} key={i} />
      ))}
    </section>
  )
}
