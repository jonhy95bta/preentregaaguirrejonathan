
import React from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cardContext";
import Loader from "./Loader";
import { useState } from "react";

function ItemDetail({ product }) {
    const { addItem } = useContext(cartContext);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    if (!product) {
        return <div><Loader /></div>;
    }

    function handleAddToCart(count) {
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            count: count,
        });
        setIsAddedToCart(true);
    }

    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                maxWidth: "500px",
                margin: "20px auto",
            }}
        >
            <img
                src={product.img}
                alt={product.title}
                style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    borderRadius: "8px",
                }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>
                <p>
                    <strong>Price: </strong>${product.price.toFixed(2)}
                </p>
            </div>
            {
                isAddedToCart 
                ? ""
                : <ItemCount onSubmitCount={handleAddToCart} max={product.stock} />

            }

        </div>
    );
}

export default ItemDetail;