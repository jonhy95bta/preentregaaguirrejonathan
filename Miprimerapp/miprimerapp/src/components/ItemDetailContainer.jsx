import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getAsyncItemById } from '../data/database';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // CREO UNA FUNCION PARA RECIBIR LOS DATOS DESDE LA FIREBASE
        const fetchProduct = async () => {
            try {
                const selectedProduct = await getAsyncItemById(id);
                setProduct(selectedProduct);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;