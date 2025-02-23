'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './game-of-life.module.css'
import { Cells, HEIGHT, initializeCells, updateCells, WIDTH } from './game'

export const GameOfLife = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [initialCells, setInitialCells] = useState(initializeCells())
  const [shouldRun, setShouldRun] = useState(true)
  const cells = useRef<Cells>()
  const frame = useRef<number>(0)

  useEffect(() => {
    cells.current = initialCells
  }, [initialCells])

  useEffect(() => {
    window.requestAnimationFrame(generation)
  })

  function draw() {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx || !cells.current) return
    ctx.clearRect(0, 0, WIDTH * 2, HEIGHT * 2)
    Object.keys(cells.current).map((x) => {
      const row = cells.current ? cells.current[parseInt(x)] : []
      row?.map((y) => {
        ctx.fillRect(parseInt(x) * 2, y * 2, 2, 2)
      })
    })
  }

  function generation() {
    frame.current++
    if (frame.current === 10) {
      frame.current = 0
      draw()
      cells.current = cells.current ? updateCells(cells.current) : {}
    }
    shouldRun && window.requestAnimationFrame(generation)
  }

  return (
    <section className={styles.mainSection}>
      <canvas
        className={styles.canvas}
        width={WIDTH * 2}
        height={HEIGHT * 2}
        ref={canvasRef}
      ></canvas>
      <div className={styles.buttons}>
        <button onClick={() => (cells.current = initialCells)}>
          start over
        </button>
        <button
          onClick={() => {
            setInitialCells(initializeCells())
          }}
        >
          new game
        </button>
      </div>
    </section>
  )
}
