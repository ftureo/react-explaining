import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    console.log("products", products);

    const getProducts = async () => {
        //WIP : Configure a Try / Catch block to handle errors
        const response = await fetch(`https://fakestoreapi.com/products/`);
        console.log("response", response);
        const data = await response.json();
        console.log("data", data);
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, []); // Array de Dependencias del useEffect
    return (
        <div>
            <h1>Bienvenidos a {props.nameEcommerce}</h1>
            <ItemCount stock={15} initial={1} />
            {products.map((product) => {
                console.log("product", product);
                return <h2>{product.title}</h2>;
            })}
        </div>
    );
};

export default ItemListContainer;
