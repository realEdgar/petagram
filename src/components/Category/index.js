import React from 'react'

import { Link, Image } from './styles'

export const Category = ({ path, cover, emoji }) => {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  )
}
