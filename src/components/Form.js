import { useState } from "react";

const Form = () => {
    const [search, setSearch] = useState("");
    const [username, setUsername] = useState("");
    console.log("Soy estado de Search: ", search);
    console.log("Soy estado de Username: ", username);

    username === "fabi" && setUsername("tukidev");

    return (
        <form
        // onSubmit={(ev) => {
        //     ev.preventDefault(), console.log(ev.target.search.value);
        // }}
        >
            <input
                type="text"
                autoComplete="off"
                name="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <p>Resultados de la búsqueda: {search}</p>
            <input
                type="text"
                name="username"
                placeholder="Insert here your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button type="submit">Buscar</button>
            <p>Resultados del username: {username}</p>
        </form>
    );
};
export default Form;
