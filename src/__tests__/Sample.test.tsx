import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('sample', () => {
  it('equal', () => {
    expect(10).toEqual(10)
  })
  it('render', async () => {
    render(<App />)
    expect(screen.getByTestId('layout-div')).toBeInTheDocument()
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByTestId('count').textContent).toBe('0')
    expect(screen.getByTestId('increment-button')).toBeTruthy()
    userEvent.click(screen.getByTestId('decrement-button'))

    screen.debug()
    expect(await screen.findByTestId('count')).toBeInTheDocument()
    // TODO: countが0になる（期待する値は-1）
  })
})
