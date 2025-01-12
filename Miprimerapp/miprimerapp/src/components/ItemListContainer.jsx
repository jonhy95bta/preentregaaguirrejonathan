import React from 'react'
import FlexContainer from './FlexContainer'
import CardProduct from './CardProduct'
import getAsyncData from '../data/getAsyncData';
import { useState, useEffect } from 'react';
import products from '../data/data';


function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const respuestaPromise = getAsyncData();

    respuestaPromise.then(respuesta => setProducts(respuesta))
    .catch((error) => alert(error));
  }, [])



  const list = products.map((prod) => (<CardProduct
    key={prod.id}
    price={prod.price}
    title={prod.title}
    text={prod.category}
    img={prod.img}
  />));
  return (
    <div>
      <FlexContainer>
        {list}

      </FlexContainer>

    </div>
  )
}

export default ItemListContainer