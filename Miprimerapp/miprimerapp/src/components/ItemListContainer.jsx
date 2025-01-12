import React from 'react'
import FlexContainer from './FlexContainer'
import CardProduct from './CardProduct'

function ItemListContainer() {
  return (
    <div>
      <FlexContainer>
        <CardProduct/>
        <CardProduct price={25.50} title="componente 2" text="Texto para explicar" />
        <CardProduct price={25.50} title="componente 3" text="Texto para explicar" />
        <CardProduct price={25.50} title="componente 4" text="Texto para explicar" />
      </FlexContainer>

    </div>
  )
}

export default ItemListContainer