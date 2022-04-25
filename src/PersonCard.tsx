import { FC, useState } from 'react'
import type Person from './interfaces/Person'

interface PersonCardProps extends Person {}

const PersonCard: FC<PersonCardProps> = (props) => {
  const [name, setName] = useState(props.name)

  const handleClick = () => {
    setName(props.name === name ? 'Mr. Nobody' : props.name)
  }

  return (
    <li role="person-info" onClick={handleClick}>
      Name is {name}
    </li>
  )
}

export default PersonCard
