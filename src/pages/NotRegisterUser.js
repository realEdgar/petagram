import React from 'react'
import Context from '../Context'
import { FormData } from '../components/FormData/index'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activeAuth }) => {
          return (
            <>
              <FormData
                title='Iniciar Sesión'
                onSubmit={activeAuth}
              />
              <FormData
                title='Registrarse'
                onSubmit={activeAuth}
              />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
