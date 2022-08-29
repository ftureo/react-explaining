import { useState } from "react";

const TukiChild = ({ animalsArray }) => {
    console.log("animalsArray", animalsArray);
    // console.log("Las props en TukiChild", props);

    //Nuestro primer hook es el useState, el cual nos permite crear un estado en nuestro componente.
    // let contador = 0;
    // const [count, setCount] = useState(0);
    const [info, setInfo] = useState({ name: "Fabi", age: 28 });
    const [loading, setLoading] = useState(false);
    const [animals, setAnimals] = useState(["Raccoon"]);

    // console.log("info", info);
    // console.log("loading", loading);
    // console.log("animals", animals);

    // const increase = () => {
    //     console.log("Ahora increase funciona");
    //     setCount(count + 1);
    // };
    // // Function to decrease the count
    // const decrease = () => {
    //     setCount(count - 1);
    // };

    // Set the name of the user
    const changeInfo = () => {
        setInfo({ ...info, name: "Fabián", lastName: "Tureo" });
    };

    // Set the loading state
    const handleLoading = () => {
        setLoading(!loading);
    };

    const animalsArray = ["Cat", "Dog", "Elephant", "Duck", "Cow"];
    // Set the animals array
    const addAnimals = () => {
        // animals.length === 1 && setAnimals([...animals, ...animalsArray]);
        if (animals.length === 1) {
            setAnimals([...animals, ...animalsArray]);
        }
    };

    return (
        <div className="TukiChild">
            <h1>Tuki Child!</h1>
            <h2>Soy hijo de TukiComponents y nieto de App</h2>
            {/* <h3>TukiCount: {count} Tukis!</h3>
            <button onClick={increase}>Click Me To Add!</button>
            <button onClick={decrease}>Click Me to Quit!</button> */}
            <button onClick={changeInfo}>ChangeInfo</button>
            <button onClick={handleLoading}>Loading</button>
            <button onClick={addAnimals}>Add Animals</button>
        </div>
    );
};

export default TukiChild;
