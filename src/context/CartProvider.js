import { useState, createContext } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, count) => {
        let product = { ...item, count };
        setCart([...cart, product]);
    };

    console.log("Cart", cart);
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
