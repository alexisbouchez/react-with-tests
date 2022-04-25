import { render, screen, fireEvent } from '@testing-library/react'
import PersonCard from './PersonCard'

describe('PersonCard', () => {
  const name = 'John Doe'

  test('it renders the name correctly', () => {
    render(<PersonCard name={name} />)

    const liElement = screen.getByRole('person-info')
    expect(liElement).toBeInTheDocument()
    expect(liElement).toHaveTextContent(`Name is ${name}`)
  })

  test('it toggles the name when clicked', () => {
    render(<PersonCard name={name} />)

    const liElement = screen.getByRole('person-info')
    fireEvent.click(liElement)
    expect(liElement).toHaveTextContent(`Name is Mr. Nobody`)
    fireEvent.click(liElement)
    expect(liElement).toHaveTextContent(`Name is ${name}`)
  })
})
