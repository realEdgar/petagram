import React, { useState } from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DefaultImage = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DefaultImage }) => {
  const [like, setLike] = useState(0)
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='PetImage' />
        </ImgWrapper>
      </a>
      <Button onClick={() => setLike(like + 1)}>
        <MdFavoriteBorder size='20px' /> {like} likes!
      </Button>
    </article>
  )
}
