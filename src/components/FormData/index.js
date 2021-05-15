import React, { useState } from 'react'
import { Form, Title, Input, Button } from './styles'

export const FormData = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const hanldeChange = (ev) => {
    console.log(ev.target.value)
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    })
  }

  return (
    <Form>
      <Title>Sign In</Title>
      <Input type='email' placeholder='Email' onChange={hanldeChange} name='email' value={formData.email} />
      <Input type='password' placeholder='Password' onChange={hanldeChange} name='password' value={formData.password} />
      <Button type='button' onClick={onSubmit}>Go Start</Button>
    </Form>
  )
}
