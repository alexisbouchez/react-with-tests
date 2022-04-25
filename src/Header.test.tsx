import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should contain the correct text', () => {
    const header = render(<Header />)
    expect(header.container).toHaveTextContent('This is my header')
  })
})
