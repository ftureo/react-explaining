import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <img
                className="imageCart"
                src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                alt="cart"
            />
            <p>{cart.length !== 0 && cart.length}</p>
        </div>
    );
};

export default CartWidget;
