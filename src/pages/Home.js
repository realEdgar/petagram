import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard/index'

export const Home = () => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
