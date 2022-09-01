import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    console.log("products", products);

    // const getProducts = async () => {
    //     //WIP : Configure a Try / Catch block to handle errors
    //     const response = await fetch(`https://fakestoreapi.com/products/`);
    //     console.log("response", response);
    //     const data = await response.json();
    //     console.log("data", data);
    //     setProducts(data);
    // };

    // useEffect(() => {
    //     getProducts();
    // }, []); // Array de Dependencias del useEffect

    // // Petición Local
    // const getProductsLocal = () => {
    //     fetch("../JSON/data.json")
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data));
    // };

    // useEffect(() => {
    //     getProductsLocal();
    // }, []);

    // Petición con Axios
    const getProductsAxios = async () => {
        const getAxios = await axios.get("https://fakestoreapi.com/products/");
        console.log("getAxios", getAxios);
        setProducts(getAxios.data);
    };

    useEffect(() => {
        getProductsAxios();
    }, []);

    return (
        <div>
            <h1>Bienvenidos a {props.nameEcommerce}</h1>
            <ItemCount stock={15} initial={1} />
            <ItemList products={products} />
            <Link to="/about">Vamos al About</Link>
        </div>
    );
};

export default ItemListContainer;
