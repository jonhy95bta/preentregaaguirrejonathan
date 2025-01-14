import React from 'react';
import Item from './Item';


function ItemList({ products }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.map((prod) => (
                <Item
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    price={prod.price}
                    category={prod.category}
                    img={prod.img}
                />
            )
            )}
        </div>
    );
}

export default ItemList;