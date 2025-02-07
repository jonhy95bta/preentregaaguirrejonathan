import React, { useState, useContext } from "react";
import cartContext from "../context/cardContext";
import { createBuyOrder } from "../data/database";

function CartView() {
    const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

    // Estado para mostrar u ocultar el formulario de compra
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    // Estados para guardar los datos del comprador
    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    // Estado para guardar el resumen de la orden una vez creada
    const [orderSummary, setOrderSummary] = useState(null);

    // Función que se llama al enviar el formulario
    async function handleCheckout(e) {
        e.preventDefault(); // Evita que se recargue la página al enviar el formulario

        const orderData = {
            buyer: {
                name: buyerName,
                email: buyerEmail,
            },
            items: cartItems,
            total: getTotalPrice(),
            date: new Date(),
        };

        try {
            const newOrderID = await createBuyOrder(orderData);
            setOrderSummary({ orderId: newOrderID, ...orderData });
            setShowCheckoutForm(false);
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    }

    return (
        <div style={styles.container}>
            <h1>Tu carrito</h1>
            {cartItems.length > 0 ? (
                <div style={styles.cartContainer}>
                    {cartItems.map((item) => (
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

            {/* Solo mostramos el botón "Comprar" si hay items y no se está mostrando el formulario */}
            {cartItems.length > 0 && !showCheckoutForm && (
                <button onClick={() => setShowCheckoutForm(true)}>Comprar</button>
            )}

            {/* Formulario de checkout */}
            {showCheckoutForm && (
                <form onSubmit={handleCheckout} style={styles.form}>
                    <h2>Completa tus datos para la compra</h2>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={buyerName}
                            onChange={(e) => setBuyerName(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            value={buyerEmail}
                            onChange={(e) => setBuyerEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </label>
                    <br />
                    {/* El botón se deshabilita si alguno de los campos está vacío */}
                    <button
                        type="submit"
                        disabled={buyerName.trim() === "" || buyerEmail.trim() === ""}
                    >
                        Confirmar Compra
                    </button>
                </form>
            )}

            {/* Resumen de la orden */}
            {orderSummary && (
                <div style={styles.orderSummary}>
                    <h2>Orden de Compra</h2>
                    <p>
                        <strong>ID de orden:</strong> {orderSummary.orderId}
                    </p>
                    <p>
                        <strong>Nombre:</strong> {orderSummary.buyer.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {orderSummary.buyer.email}
                    </p>
                    <p>
                        <strong>Total:</strong> ${orderSummary.total}
                    </p>
                    <p>
                        <strong>Fecha:</strong> {orderSummary.date.toString()}
                    </p>
                    <h3>Items:</h3>
                    {orderSummary.items.map((item) => (
                        <div key={item.id}>
                            <p>
                                {item.title} - {item.count} unidades
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartView;

const styles = {
    container: {
        padding: "20px",
    },
    cartContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        flexWrap: "wrap",
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
    form: {
        marginTop: "20px",
        textAlign: "center",
    },
    input: {
        margin: "5px",
        padding: "5px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    orderSummary: {
        marginTop: "30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
};
