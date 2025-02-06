
import React from 'react';
import Button from './Button';
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
    if (!product) {
        return <div>Loading...</div>;
    }
    function handleAddToCart(count){
        console.log(`agregaste ${count} unidades al carrito`);
    }
    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px', margin: '20px auto' }}>
            <img src={product.img} alt={product.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>
                <p><strong>Price: </strong>${product.price.toFixed(2)}</p>
            </div>
            <div>
                <Button>Agregar al Carrito</Button>
            </div>
            
            <ItemCount onSubmitCount={handleAddToCart} max= {product.stock}/>
        </div>
    );
}

export default ItemDetail;