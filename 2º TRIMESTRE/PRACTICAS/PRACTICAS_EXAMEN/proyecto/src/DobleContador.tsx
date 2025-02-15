import { useState } from "react";

function DobleContador(){
    const [cont, setCont] = useState(0);

    function incrementar1(){
        setCont(cont + 1);
    }

    function incrementar2(){
        setCont(cont + 2);
    }

    return(
        <div>
            <p>Contador: {cont}</p>
            <button onClick={incrementar1}>Suma 1</button>
            <button onClick={incrementar2}>Suma 2</button>
        </div>
    )
}

export default DobleContador;