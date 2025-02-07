import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getAsyncData from '../data/getAsyncData';
import { useParams } from 'react-router-dom';  // 
import Loader from './Loader';
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); 
  useEffect(() => {
    getAsyncData()
      .then((respuesta) => {
        if (id) {
          const filteredProducts = respuesta.filter((prod) => prod.category.toLowerCase() === id.toLowerCase());
          setProducts(filteredProducts);
        } else {
          setProducts(respuesta);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]); 
  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;