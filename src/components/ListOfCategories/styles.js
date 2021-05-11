import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 10px;
  &.fixed {
    ${fadeIn({ time: '1s'})}
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    left: 0;
    margin: 0 auto;
    max-width: 350px;
    padding: 10px;
    position: fixed;
    right: 0;
    top: 0px;
    transform: scale(0.95);
    z-index: 1;
  }
`
export const ListItem = styled.li`
  list-style: none;
  margin-right: 10px;
`
