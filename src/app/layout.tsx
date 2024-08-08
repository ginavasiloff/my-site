import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gina Vasiloff',
  description: 'software engineer, rabbit parent, cat neighbor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <header className={styles.header}>
          <h1>Gina Vasiloff</h1>
          <span>software engineer</span>
        </header>
        {children}
      </body>
    </html>
  )
}
