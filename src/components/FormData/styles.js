import styled from 'styled-components'

export const Form = styled.form`
  width: 300px;
  height: 500px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
`

export const Title = styled.h2`
  margin: 0;
`

export const Input = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  
  &::placeholder {
    color: black;
    font-family: 'Courier New', Courier, monospace;
  }
`

export const Button = styled.button`
  width: 75%;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  background-color: #5b5bc3;

  &[disabled] {
    opacity: 0.5;
  }
`
