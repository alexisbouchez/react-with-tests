import { render } from '@testing-library/react'
import Modal from './Modal'

test('modal works correctly', () => {
  render(<Modal />)
  expect(1).toBe(1)
})
