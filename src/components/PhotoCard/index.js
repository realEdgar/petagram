import React, { useState, useRef, useEffect } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({ id, src }) => {
  const [like, setLike] = useState(0)
  const [show, setShow] = useState(false)
  const referenciaDOM = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        console.log(isIntersecting)
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(referenciaDOM.current)
    })
  }, [referenciaDOM])

  return (
    <Article ref={referenciaDOM}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='PetImage' />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLike(like + 1)}>
            <MdFavoriteBorder size='20px' /> {like} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
