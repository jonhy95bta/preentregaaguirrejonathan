import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../data/data'; 

function ItemDetailContainer() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        
        const selectedProduct = products.find((prod) => prod.id === parseInt(id));
        setProduct(selectedProduct);
    }, [id]); 

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;