import { useState } from "react";

const TukiChild = () => {
    //Nuestro primer hook es el useState, el cual nos permite crear un estado en nuestro componente.
    // let contador = 0;
    const [count, setCount] = useState(0);

    console.log("count", count);
    console.log("TukiChild");

    const increase = () => {
        console.log("Ahora increase funciona");
        setCount(count + 1);
    };

    return (
        <div className="TukiChild">
            <h1>Tuki Child</h1>
            <h2>Soy hijo de TukiComponents y nieto de App</h2>
            <h3>Contador: {count} enjoy!</h3>
            <button onClick={increase}>Click Me!</button>
        </div>
    );
};

export default TukiChild;
