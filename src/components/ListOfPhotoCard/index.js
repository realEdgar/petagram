import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List, ListItem } from './styles'
import Lista from '../../../api/db.json'

export const ListOfPhotoCard = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    setPhotos(Lista.photos)
  }, [])
  return (
    <List>
      {
        photos.map(photo => {
          return (
            <ListItem key={photo.id}>
              <PhotoCard {...photo} />
            </ListItem>
          )
        })
      }
    </List>
  )
}
