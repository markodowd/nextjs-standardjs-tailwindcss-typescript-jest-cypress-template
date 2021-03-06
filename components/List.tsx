import { FC } from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

interface Props {
  items: User[]
}

const List: FC<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
