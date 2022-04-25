import { render, screen } from '@testing-library/react'
import type Person from './interfaces/Person'
import PersonsList from './PersonsList'

test('persons list renders correctly a list of persons', () => {
  const persons: Person[] = [{ name: 'Alexis Bouchez' }, { name: 'John Doe' }]
  render(<PersonsList persons={persons} />)
  const listItemsElements = screen.getAllByRole('navigation')
  expect(listItemsElements).toHaveLength(2)
  expect(listItemsElements[0]).toHaveTextContent('Alexis Bouchez')
  expect(listItemsElements[1]).toHaveTextContent('John Doe')
})
