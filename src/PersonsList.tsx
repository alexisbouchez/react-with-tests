import type { FC } from 'react'
import type Person from './interfaces/Person'

interface PersonsListProps {
  persons: Person[]
}

const PersonsList: FC<PersonsListProps> = ({ persons }) => (
  <ul>
    {persons.map((person) => (
      <li key={person.name} role="navigation">
        {person.name}
      </li>
    ))}
  </ul>
)

export default PersonsList
