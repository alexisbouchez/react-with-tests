import { render, screen } from '@testing-library/react'
import NewCharacterForm from './NewCharacterForm'

describe('NewCharacterForm', () => {
  it('renders the form correctly', () => {
    render(<NewCharacterForm />)

    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })

  it('renders a name field correctly', () => {
    render(<NewCharacterForm />)

    const label = screen.getByLabelText(/name/i)
    expect(label).toBeInTheDocument()

    const input = screen.getByTestId('name-input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('id', 'name')
  })

  it('renders a submit button correctly', () => {
    render(<NewCharacterForm />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
