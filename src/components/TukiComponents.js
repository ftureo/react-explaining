import TukiChild from "./TukiChild";

// Hago un destructuring de los props para poder usarlos en el componente
const TukiComponents = (props) => {
    // console.log("TukiComponents");
    // console.log("Props en TukiComponents", props);

    // Para acceder a animalsArray, debo usar props.animalsArray

    // const { animalsArray } = props;

    // Recuerden desestructurar los props para poder usarlos en el componente
    // console.log("animalsArray", animalsArray);

    return (
        <div className="containerTukiComponents">
            <h1>Tuki Components</h1>
            <h2>Clase Picante de React</h2>
            <TukiChild />
        </div>
    );
};

export default TukiComponents;
