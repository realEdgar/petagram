import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Title, Input, Button } from './styles'

export const FormData = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Form>
      <Title>{title}</Title>
      <Input type='email' placeholder='Email' {...email} />
      <Input type='password' placeholder='Password' {...password} />
      <Button type='button' onClick={onSubmit}>{title}</Button>
    </Form>
  )
}
