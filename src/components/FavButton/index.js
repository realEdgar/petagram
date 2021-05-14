import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ id, likes }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const handleClick = (ev) => {
    console.log(ev)
    setLiked(!liked)
  }

  return (
    <Button onClick={handleClick}>
      <Icon size='20px' /> {likes} likes!
    </Button>
  )
}
