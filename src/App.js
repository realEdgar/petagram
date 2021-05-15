import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'

import { Home } from './pages/Home'
import { NavBar } from './components/NavBar/index'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
      </Router>
      <NavBar />
    </>
    
  )
}
