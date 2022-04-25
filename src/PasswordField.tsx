import type { ChangeEvent, FC } from 'react'
import { useEffect, useState } from 'react'

const PasswordField: FC = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setPassword(value)
  }

  useEffect(() => {
    if (password.length === 0) {
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
    }
  }, [password])

  return (
    <div>
      <label htmlFor="password">Password</label>

      <input
        type="password"
        id="password"
        placeholder="Enter a password with at least 8 characters"
        onChange={onChange}
      />

      {error ? <p id="error">{error}</p> : null}
    </div>
  )
}

export default PasswordField
