
import React, { useState } from 'react';

function Button(props) {
    const { text, color = "#007bff", disabled = false, children } = props;

    const [isDisabled, setIsDisabled] = useState(disabled);
    const [colorState, setColorState] = useState(color);
    const [isHovered, setIsHovered] = useState(false);

    const displayText = children === undefined ? text : children;


    const styles = {
        boton: {
            padding: "10px 20px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: isDisabled ? "not-allowed" : "pointer",
            backgroundColor: isDisabled
                ? "#ccc"
                : isHovered 
                ? "#0056b3"  
                : colorState, 
            color: isDisabled ? "#666" : "#fff",
            transition: "background-color 0.3s ease",
        },
    };

    return (
        <button
            onClick={() => {
                setIsDisabled(true);
                setColorState("#ffa500");
            }}
            style={styles.boton}
            disabled={isDisabled}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            {displayText}
        </button>
    );
}

export default Button;