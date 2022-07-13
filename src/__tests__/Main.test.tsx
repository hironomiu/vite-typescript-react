import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from '../components/Main'

describe('Main', () => {
  it('test', () => {
    render(<Main />)
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
    expect(screen.getByTestId('count').textContent).toBe('0')
  })
})
