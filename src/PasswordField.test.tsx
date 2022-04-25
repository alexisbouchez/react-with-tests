import { fireEvent, render } from '@testing-library/react'
import PasswordField from './PasswordField'

describe('PasswordField', () => {
  let container: HTMLElement

  beforeEach(() => {
    const component = render(<PasswordField />)
    container = component.container
  })

  it('should render correctly a label', () => {
    const label = container.querySelector('label')
    expect(label).toBeInTheDocument()
    expect(label!.htmlFor).toBe('password')
    expect(label!.textContent).toBe('Password')
  })

  it('should render correctly an input', () => {
    const input = container.querySelector('input')
    expect(input!.placeholder).toBe(
      'Enter a password with at least 8 characters'
    )
    expect(input!.id).toBe('password')
    expect(input!.type).toBe('password')
  })

  it('should not print an error message when the password is empty', () => {
    const input = container.querySelector('input')
    fireEvent.change(input!, { target: { value: '' } })
    const error = container.querySelector('#error')
    expect(error).toBe(null)
  })

  it('should print an error message when the password is too short', () => {
    const input = container.querySelector('input')
    fireEvent.change(input!, { target: { value: '1234567' } })

    const error = container.querySelector('#error')
    expect(error!.textContent).toBe('Password must be at least 8 characters')
  })

  it('shold not print an error message when the password is long enough', () => {
    const input = container.querySelector('input')
    fireEvent.change(input!, { target: { value: '12345678' } })
    const error = container.querySelector('#error')
    expect(error).not.toBeInTheDocument()
  })
})
