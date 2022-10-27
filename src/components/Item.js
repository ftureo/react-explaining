import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";

const Item = ({ title, price, id, category }) => {
    const cartContext = useContext(CartContext);

    const { cart, addToCart } = cartContext;

    // console.log("cart", cart);

    const onAdd = (count) => {
        addToCart({ title, price, id, category }, count);
    };

    // console.log("cartContext", cartContext);

    return (
        <>
            <Link to={`/item/${id}`}>
                <div>
                    <h1>{title}</h1>
                    <h3>{price}</h3>
                    <h4>{id}</h4>
                    <h5>{category}</h5>
                </div>
            </Link>
            <ItemCount stock={15} initial={1} onAdd={onAdd} />
        </>
    );
};
export default Item;
