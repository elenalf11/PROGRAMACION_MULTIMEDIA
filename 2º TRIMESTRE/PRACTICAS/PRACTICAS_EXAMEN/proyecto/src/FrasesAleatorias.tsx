import { useState } from "react";

function FrasesAleatorias(){
    const frases = [
        "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        "No dejes para mañana lo que puedas hacer hoy.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "La felicidad no es algo hecho. Proviene de tus propias acciones.",
        "Todo lo que somos es el resultado de lo que hemos pensado.",
        "No cuentes los días, haz que los días cuenten.",
        "La única forma de hacer un gran trabajo es amar lo que haces."
    ];

    const [frase, setFrase] = useState<string>("");

    function mostrarFraseAleatoria(){
        const randomIndex = Math.floor(Math.random() * frases.length);
        setFrase(frases[randomIndex]);
    }

    return(
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="mb-4 text-2xl">Frase Aleatoria</h2>
            <button
                onClick={mostrarFraseAleatoria}
                className="bg-blue-500 mb-4 px-4 py-2 rounded text-white"
            >
                Mostrar Frase
            </button>
            <p className="text-xl">{frase}</p>
        </div>
    );
}

export default FrasesAleatorias;