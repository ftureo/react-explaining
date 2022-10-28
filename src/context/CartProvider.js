import { useState, createContext } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, count) => {
        if (cart.some((element) => element.id === item.id)) {
            console.log("Ya existe el producto en el carrito");

            const indexProduct = cart.findIndex(
                (element) => element.id === item.id
            );
            console.log("indexProduct", indexProduct);

            let product = cart[indexProduct];
            console.log("product to update", product);
            product = { ...product, count: product.count + count };
            console.log("product updated", product);

            const newCart = [...cart];
            newCart.splice(indexProduct, 1, product);
            setCart(newCart);
        } else {
            let product = { ...item, count };
            setCart([...cart, product]);
        }
    };

    console.log("Cart", cart);

    const deleteCart = () => {
        setCart([]);
    };

    // TODO - DeleteById

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                deleteCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
