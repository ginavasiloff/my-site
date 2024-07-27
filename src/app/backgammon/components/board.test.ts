// @vitest-environment jsdom

import { render } from '@testing-library/react'
import { Board } from './board'

describe('Board', () => {
  test('it renders', () => {
    const emptyBoardPositions = { positions: { spaces: {}, bar: {} } }
    const { getByTestId } = render(Board(emptyBoardPositions))
    expect(getByTestId('backgammon-board').children.length).toBeGreaterThan
    expect(getByTestId('backgammon-board')).toMatchSnapshot()
  })
})
