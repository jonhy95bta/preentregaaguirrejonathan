import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import  getAsyncData,{ getAsynItemsByCategory } from '../data/database';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { catId } = useParams(); // id es la categoría, por ejemplo

  useEffect(() => {
    // Si se pasa una categoría, usamos getAsynItemsByCategory
    if (catId) {

      getAsynItemsByCategory(catId.toLowerCase())
        .then((respuesta) => {

          setProducts(respuesta);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      // Sino, usamos la función que trae todos los productos
      getAsyncData()
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [catId]);

  if (loading) {
    return <Loader />;
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