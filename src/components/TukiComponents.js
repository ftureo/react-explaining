import TukiChild from "./TukiChild";

const TukiComponents = () => {
    console.log("TukiComponents");
    return (
        <div className="containerTukiComponents">
            <h1>Tuki Components</h1>
            <h2>Clase Picante de React</h2>
            <TukiChild />
        </div>
    );
};

export default TukiComponents;
