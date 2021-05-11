import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, ListItem } from './styles'

import Lista from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    setCategories(Lista.categories)
  }, [])
  useEffect(() => {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])
  const listRender = (fixed) => {
    return (
      <List className={fixed}>
        {
          categories.map(category => (
            <ListItem key={category.id}>
              <Category
                {...category}
              />
            </ListItem>
          ))
        }
      </List>
    )
  }
  return (
    <>
      {listRender()}
      {showFixed && listRender('fixed')}
    </>
  )
}
