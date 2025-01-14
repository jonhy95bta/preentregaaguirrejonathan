import React from 'react';
import Button from './Button';
import { Link } from "react-router-dom";

function Item({ title, price, category, img, id }) {
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
            <img src={img} alt={title} style={styles.image} />
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{category}</p>
            <div style={styles.priceContainer}>
                <p>${price.toFixed(2)}</p>
            </div>
            <Link to={"/item/" + id}>
            <Button>Ver Detalle</Button>
            </Link>
        </div>
    );
}

export default Item;
