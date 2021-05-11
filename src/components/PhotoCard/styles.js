import styled from 'styled-components'

export const ImgWrapper = styled.figure`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin: 0;
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: bold;
`
