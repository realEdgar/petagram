import styled from 'styled-components'

export const Form = styled.form`
  width: 90%;
  height: 200px;
  padding: 10px;
  margin: 10px auto 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.2);
  font-family: Arial, Helvetica, sans-serif;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 0;
`

export const Input = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);
  
  &::placeholder {
    color: black;
    font-family: 'Courier New', Courier, monospace;
    opacity: 0.5
  }
`

export const Button = styled.button`
  width: 75%;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  background-color: #8d00ff;
`
