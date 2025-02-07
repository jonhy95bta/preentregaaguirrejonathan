import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import ItemCount from "./ItemCount";
import cartContext from "../context/cardContext";
import Loader from "./Loader";

function ItemDetail({ product }) {
    const { addItem } = useContext(cartContext);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const navigate = useNavigate(); 

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
                textAlign: "center",
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
            <p><strong>Precio: </strong>${product.price.toFixed(2)}</p>

            {isAddedToCart ? (
                
                <button 
                    onClick={() => navigate("/cart")} 
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}>
                    🛒 Ir al carrito
                </button>
            ) : (
                
                <ItemCount onSubmitCount={handleAddToCart} max={product.stock} />
            )}
        </div>
    );
}

export default ItemDetail;