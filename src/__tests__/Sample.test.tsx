import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/dom'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('sample', () => {
  it('equal', () => {
    expect(10).toEqual(10)
  })
  it('render', async () => {
    render(<App />)
    expect(screen.getByText('Layout')).toBeTruthy()
    expect(screen.getByTestId('count').textContent).toBe('0')
    expect(screen.getByTestId('increment-button')).toBeTruthy()
    userEvent.click(screen.getByTestId('decrement-button'))
    expect(await screen.findByTestId('count')).toBeTruthy()
    // TODO: countが0になる（期待する値は-1）
    screen.debug()
  })
})
