import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List } from './styles'
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
          return <PhotoCard key={photo.id} {...photo} />
        })
      }
    </List>
  )
}
