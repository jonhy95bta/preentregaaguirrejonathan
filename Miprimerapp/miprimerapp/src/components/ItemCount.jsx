import React, { useState } from 'react';

function ItemCount() {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < 15) {
            setCount(count + 1);
        }
    };

    const handleSubstract = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
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
    );
}

export default ItemCount;