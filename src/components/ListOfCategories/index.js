import React from 'react'
import { Category } from '../Category/index'
import { List, ListItem } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        [1, 2, 3, 4, 5, 6].map(category => {
          return <ListItem key={category}><Category /></ListItem>
        })
      }
    </List>
  )
}
