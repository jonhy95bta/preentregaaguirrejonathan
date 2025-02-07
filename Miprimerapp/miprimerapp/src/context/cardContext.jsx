import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    function getTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.count * item.price;
        });
        return totalPrice;
    }

    function addItem({ id, price, title, img, count }) {
        const copyCartItems = [...cartItems]; 

        // Verificar si el producto ya existe en el carrito
        const existingItemIndex = copyCartItems.findIndex((item) => item.id == id);

        if (existingItemIndex !== -1) {
            // Si ya existe, se suma la cantidad
            copyCartItems[existingItemIndex].count += count;
        } else {
            // Si no existe, se agrega al carrito
            copyCartItems.push({
                id,
                price,
                title,
                img,
                count,
            });
        }

        setCartItems(copyCartItems);
    }

    function removeItem(id) {
        const newCartState = cartItems.filter(item => item.id !== id);
        setCartItems(newCartState);
    }

    function countItemInCart() {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    function clear() {
        setCartItems([]);
    }

    return (
        <cartContext.Provider
            value={{
                cartItems,
                name: "carrito de compras",
                countItemInCart,
                addItem,
                removeItem,
                clear,
                getTotalPrice,
            }}
        >
            {props.children}
        </cartContext.Provider>
    );
}

export default cartContext;