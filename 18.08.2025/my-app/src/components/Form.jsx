import React from "react";
import useLocalStorage from "./UseLocalStorage";

function Form() {
    const [name, setName] = useLocalStorage('name', '')

    return (
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    )
}

export default Form