import React, { useState } from 'react'
import { Container, Title, Time, Element } from './styles'

export const Timer = () => {
  const [second, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  setTimeout(() => {
    if (second === 59) {
      setSeconds(0)
      if (minutes === 59) {
        setMinutes(0)
        setHours(hours + 1)
      } else {
        setMinutes(minutes + 1)
      }
    } else {
      setSeconds(second + 1)
    }
  }, 1000)

  return (
    <Container>
      <Title>Time on this page</Title>
      <Time>
        <Element>{hours}</Element>:
        <Element>{minutes}</Element>:
        <Element>{second}</Element>
      </Time>
    </Container>
  )
}
