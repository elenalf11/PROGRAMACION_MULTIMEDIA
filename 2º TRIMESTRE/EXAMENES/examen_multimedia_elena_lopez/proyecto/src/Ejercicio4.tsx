import { useState } from "react";

const [name, setName] = useState<string>("");
const [listName] = useState<string[]>([]);

function Ejercicio4(){

    return(
        <div>
            <h2 className="font-bold">Lista de Nombres</h2>
        </div>
    );
}

export default Ejercicio4;