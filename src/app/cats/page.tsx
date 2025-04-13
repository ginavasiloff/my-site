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

export default async function Page() {
  return (
    <>
      <section className={styles.gallery}>
        <p>
          Note: However pleasant these cats are, cats should be kept indoors.
          Outdoor cats are harmful to small animals and are more at risk for
          injury and disease. Please keep your cats inside.{' '}
          <a href="https://www.humaneworld.org/en/resources/10-tips-keep-your-cat-happy-and-entertained-indoors">
            Here are 10 tips for keeping your cat happy indoors.
          </a>
        </p>
        {cats.map((cat, i) => (
          <CatCard cat={cat} key={i} />
        ))}
      </section>
    </>
  )
}
