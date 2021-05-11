import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCard } from './components/ListOfPhotoCard/index'
import { GlobalStyles } from './GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
