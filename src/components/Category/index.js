import React from 'react'

import { Anchor, Image } from './styles'

export const Category = props => {
  const { path, cover, emoji } = props

  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}
