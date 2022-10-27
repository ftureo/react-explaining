import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    // useEffect(() => {
    //     console.log("Componente montado o actualizado!");
    //     return console.log("Componente desmontado!");
    // }, [count]);
    const increase = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    };

    const decrease = () => {
        const newValue = count - 1;
        newValue >= initial && setCount(newValue);
    };

    return (
        <div>
            <h1>Count</h1>
            <h3>TukiCount: {count} TukiProduct!</h3>
            <h3>stock: {stock}</h3>
            <button onClick={increase}>Click Me To Add!</button>
            <button onClick={decrease}>Click Me to Quit!</button>
            <button
                onClick={() => {
                    onAdd(count);
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ItemCount;
