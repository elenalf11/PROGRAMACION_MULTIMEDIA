import { useState } from "react";

const [cont, setCont] = useState<number>(1);

function Ejercicio3(){
    
    function incrementar1(){
        setCont(cont + 1);
    }

    function incrementar2(){
        setCont(cont + 2);
    }

    return(
        <div className="bg-amber-300 min-h-min">
            <h2 className="font-bold">Contadores</h2>
            <p>Cuenta del contador {cont}</p>

            <button
                onClick={incrementar1}
                className="bg-red-400 rounded-3xl"
            >
                Suma 1
            </button>

            <button
                onClick={incrementar2}
                className="bg-blue-500 rounded-3xl"
            >
                Suma 2
            </button>
        </div>
    );
}

export default Ejercicio3;