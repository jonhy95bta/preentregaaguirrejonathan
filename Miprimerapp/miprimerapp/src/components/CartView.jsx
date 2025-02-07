import { useContext } from "react";
import cartContext from "../context/cardContext";
import React from 'react';

function CartView() {
    const { cartItems, removeItem } = useContext(cartContext);

    const styles = {
        container: {
            padding: "20px",
        },
        cartContainer: {
            display: "flex",
            flexDirection: "row", // Alinea horizontalmente
            gap: "20px",         // Espacio entre cada item
            flexWrap: "wrap",     // Permite que los items se muevan a la siguiente línea si no caben
            justifyContent: "center",
        },
        cartItem: {
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        },
        emptyMessage: {
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "20px",
        },
    };

    return (
        <div style={styles.container}>
            <h1>Tu carrito</h1>
            {cartItems.length > 0 ? (
                <div style={styles.cartContainer}>
                    {cartItems.map(item => (
                        <div key={item.id} style={styles.cartItem}>
                            <h3>{item.title}</h3>
                            <p>Precio: $ {item.price}</p>
                            <p>Unidades: {item.count}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={styles.emptyMessage}>El carrito está vacío</p>
            )}
        </div>
    );
}

export default CartView;
