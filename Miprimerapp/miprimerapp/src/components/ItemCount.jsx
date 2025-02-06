import React, { useState } from 'react';
import Button from './Button';
function ItemCount(props) {
    const [count, setCount] = useState(1);
    const { onSubmitCount }= props;

    const handleAdd = () => {
        if (count < props.max) {
            setCount(count + 1);
        }
    };

    const handleSubstract = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button 
                onClick={handleSubstract} 
                disabled={count <= 0}
                style={{ 
                    padding: "5px 10px", 
                    cursor: count <= 0 ? "not-allowed" : "pointer" 
                }}
            >
                -
            </button>
            <span style={{ fontSize: "1.2rem", minWidth: "30px", textAlign: "center" }}>{count}</span>
            <button 
                onClick={handleAdd} 
                disabled={count >= 15}
                style={{ 
                    padding: "5px 10px", 
                    cursor: count >= 15 ? "not-allowed" : "pointer" 
                }}
            >
                +
            </button>
        </div>
        <div>
                <button onClick={()=> {props.onSubmitCount(count)}}>Enviar</button>
        </div>
        </div>
    );
}

export default ItemCount;