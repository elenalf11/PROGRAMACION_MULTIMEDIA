import { useState } from "react";

function ModoOscuro(){
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const estilo = darkMode
    ? "min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white transition-colors duration-500"
    : "min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black transition-colors duration-500";

    return(
        <div className={estilo}>
            <h2 className="mb-4 text-2xl">Modo {darkMode ? "Oscuro" : "Claro"}</h2>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-blue-500 px-4 py-2 rounded text-white"
            >
                Cambiar a {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>
        </div>
    )
}

export default ModoOscuro;