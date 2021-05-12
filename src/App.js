import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCard } from './components/ListOfPhotoCard/index'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'
import { Timer } from './components/Timer/Timer'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Timer />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
