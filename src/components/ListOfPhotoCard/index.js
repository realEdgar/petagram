import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List, ListItem } from './styles'

export const ListOfPhotoCard = () => {
  return (
    <List>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(photo => {
          return (
            <ListItem key={photo}><PhotoCard /></ListItem>
          )
        })
      }
    </List>
  )
}
