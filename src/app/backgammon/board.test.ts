// @vitest-environment jsdom

import { render } from '@testing-library/react'
import { Board } from './board'

describe('Board', () => {
  test('it renders', () => {
    const { getByTestId } = render(
      Board({
        trimWidth: 1,
        width: 100,
        height: 100,
        boardColor: 'white',
        boardTrim: 'black',
      })
    )
    expect(getByTestId('backgammon-board').children.length).toBeGreaterThan
    expect(getByTestId('backgammon-board')).toMatchSnapshot()
  })
})
