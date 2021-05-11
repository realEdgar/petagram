import React from 'react'

import { Anchor, Image } from './styles'

export const Category = props => {
  return (
    <Anchor href={props.path}>
      <Image src={props.cover} />
      {props.emoji}
    </Anchor>
  )
}
