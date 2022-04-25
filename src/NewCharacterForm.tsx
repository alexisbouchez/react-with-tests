import type { FC } from 'react'
import { useState } from 'react'

interface NewCharacterFormProps {}

const NewCharacterForm: FC<NewCharacterFormProps> = () => {
  const [name, setName] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(name)
  }

  return (
    <form role="form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" role="textbox" data-testid="name-input" />
      </div>

      <div>
        <button type="submit" role="button">
          Submit
        </button>
      </div>
    </form>
  )
}

export default NewCharacterForm
