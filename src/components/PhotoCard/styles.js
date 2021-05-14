import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  padding: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  min-height: 200px;
`

export const ImgWrapper = styled.figure`
  border-radius: 10px;
  display: block;
  height: auto;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin: 0;
`

export const Img = styled.img`
  ${fadeIn({ time: '1s' })};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
