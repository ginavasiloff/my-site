'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './game-of-life.module.css'
import { HEIGHT, initializeCells, updateCells, WIDTH } from './game'

export const GameOfLife = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let cells = initializeCells()
  let frame = 0
  useEffect(() => {
    window.requestAnimationFrame(generation)
  })

  function draw() {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, WIDTH * 2, HEIGHT * 2)
    Object.keys(cells).map((x) => {
      const row = cells[parseInt(x)]
      row.map((y) => {
        ctx.fillRect(parseInt(x) * 2, y * 2, 2, 2)
      })
    })
  }

  function generation() {
    frame++
    if (frame === 10) {
      frame = 0
      draw()
      cells = updateCells(cells)
    }
    window.requestAnimationFrame(generation)
  }

  return (
    <canvas
      className={styles.canvas}
      width={WIDTH * 2}
      height={HEIGHT * 2}
      ref={canvasRef}
    ></canvas>
  )
}
