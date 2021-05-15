import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'
import { NavBar } from './components/NavBar/index'

import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'

import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
