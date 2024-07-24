export type BoardProps = {
  width: number
  height: number
  boardColor: string
  boardTrim: string
}

export const Board = (boardProps: BoardProps) => {
  const { boardColor, boardTrim, width, height } = boardProps
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={500}
      height={400}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        stroke-width="0"
        width={width}
        height={height}
        x="0"
        y="0"
        fill={boardTrim}
      />
      <rect
        stroke-width="0"
        width={width - 2}
        height={height - 2}
        x="1"
        y="1"
        fill={boardColor}
      />
      <rect
        stroke-width="0"
        width={2}
        height={height}
        x="49"
        y="0"
        fill={boardTrim}
      />
      {[0, 0, 0, 0, 0, 0].map((_, i) => {
        const dx = (width - 4) / 12
        const x0 = 1 + i * dx
        const x1 = x0 + dx
        const x2 = x0 + dx / 2
        const y2 = (height - 2) / 2 - height * 0.1
        const y3 = (height - 2) / 2 + height * 0.1
        const y4 = height - 1
        const x3 = (width - 2) / 2 + 1 + x0
        const x4 = x3 + dx
        const x5 = x4 - dx / 2
        return (
          <>
            <polygon
              key={`q1-${i}`}
              points={`${x0}, 1, ${x1}, 1, ${x2}, ${y2}`}
              fill={boardTrim}
              stroke="none"
            />
            <polygon
              key={`q1-${i}`}
              points={`${x0}, ${y4}, ${x1}, ${y4}, ${x2}, ${y3}`}
              fill={boardTrim}
              stroke="none"
            />
            <polygon
              key={`q1-${i}`}
              points={`${x3}, 1, ${x4}, 1, ${x5}, ${y2}`}
              fill={boardTrim}
              stroke="none"
            />
            <polygon
              key={`q1-${i}`}
              points={`${x3}, ${y4}, ${x4}, ${y4}, ${x5}, ${y3}`}
              fill={boardTrim}
              stroke="none"
            />
          </>
        )
      })}
    </svg>
  )
}
