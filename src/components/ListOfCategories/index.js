import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, ListItem } from './styles'

import Lista from '../../../api/db.json'
function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setCategories(Lista.categories)
  }, [])

  return { categories, loading }
}
export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories } = useCategoriesData()
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
      <List fixed={fixed}>
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
