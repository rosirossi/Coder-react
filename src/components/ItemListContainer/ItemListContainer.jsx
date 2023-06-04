import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1>¡{greeting} a bordo!</h1>
    </div>
  )
}

export default ItemListContainer