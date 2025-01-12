import React from 'react'
import Button from './button';
function CardProduct(props) {
    const { price, title, text, img, id } = props


    const styles = {
        card: {
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "300px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            margin: "16px auto",
            textAlign: "center",
        },
        image: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
        },
        title: {
            fontSize: "1.5rem",
            margin: "8px 0",
            color: "#333",
        },
        description: {
            fontSize: "1rem",
            color: "#666",
            marginBottom: "16px",
        },
        priceContainer: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "12px",
        },
        button: {
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
        },
        buttonHover: {
            backgroundColor: "#0056b3",
        },
    };

    return (
        <div style={styles.card}>
            <img
                src={img}
                alt="Producto"
                style={styles.image}
            />
            <div>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.description}>
                    {text}
                </p>

                <div style={styles.priceContainer}>
                    <p> $ {price}</p>
                </div>
                <Button>Agregar al carrito</Button>        
            </div>
        </div>
    );
}


export default CardProduct;