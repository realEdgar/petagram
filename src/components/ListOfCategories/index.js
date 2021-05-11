import React from 'react'
import { Category } from '../Category/index'
import { List, ListItem } from './styles'

import Lista from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        Lista.categories.map(category => (
          <ListItem key={category.id}>
            <Category
              {...category}
            />
          </ListItem>
        ))
      }
    </List>
  )
}
