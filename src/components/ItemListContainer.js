import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    console.log("products", products);

    // localhost:3000/ - Muestra todos los productos
    // localhost:3000/category/:category - Debe filtrar los resultados y renderizar solamente el listado que corresponda

    const { category } = useParams();
    console.log("useParams", useParams());
    console.log("Category", category);

    // Petición con Axios
    const getProductsAxios = async () => {
        const getAxios = await axios.get("https://fakestoreapi.com/products/");
        console.log("getAxios", getAxios);
        if (category) {
            setProducts(
                getAxios.data.filter((product) => product.category === category)
            );
        } else {
            setProducts(getAxios.data);
        }

        // setProducts(getAxios.data);
    };

    useEffect(() => {
        getProductsAxios();
    }, [category]);

    return (
        <div>
            <h1>Bienvenidos a {props.nameEcommerce}</h1>
            <ItemCount stock={15} initial={1} />
            {products.length === 0 ? (
                <h1>Loading ... </h1>
            ) : (
                <ItemList products={products} />
            )}
            <Link to="/about">Vamos al About</Link>
        </div>
    );
};

export default ItemListContainer;

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
// const getProductsAxios = async () => {
//     const getAxios = await axios.get("https://fakestoreapi.com/products/");
//     console.log("getAxios", getAxios);
//     setProducts(getAxios.data);
// };
