import React from 'react'
import { FavButton } from '../FavButton/index'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'

export const PhotoCard = props => {
  const { id, src } = props
  const [show, domReference] = useNearScreen(false)

  return (
    <Article ref={domReference}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='PetImage' />
            </ImgWrapper>
          </a>
          <FavButton {...props} />
        </>
      )}
    </Article>
  )
}
