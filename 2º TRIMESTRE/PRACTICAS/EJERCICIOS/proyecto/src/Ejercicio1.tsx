import { useState } from "react";

function Ejercicio1(){
    const [terminoBuscado, setTerminoBuscado] = useState<string>(""); // Estado para el término de búsqueda
    const items = [
        "Manzana",
        "Manzanita",
        "Pera",
        "Melón",
        "Sandía",
        "Cereza"
    ];

    // Filtrar elementos según el término de búsqueda
    const elementosFiltrados = items.filter(
        (item) => item.includes(terminoBuscado) // Búsqueda exacta, sensible a mayúsculas y minúsculas
    );

    // Recibe el evento de cambio en el input y actualiza el estado
    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>){
        setTerminoBuscado(e.target.value);
    }

    return(
        <div className="mx-auto p-4 max-w-md">
            <h1 className="mb-6 font-bold text-2xl text-center">Filtrar elementos</h1>
            <div className="mb-4">
                <input type="text" 
                    placeholder="Buscar..."
                    value = {terminoBuscado}
                    onChange={handleSearchChange}
                    className="p-2 border border-blue-300 rounded-lg w-full focus:outline-none"
                />
            </div>
            <ul className="space-y-2">
                {elementosFiltrados.length > 0 ? (
                    elementosFiltrados.map((item, index) => (
                        <li
                            key={index}
                            className="bg-gray-100 shadow-sm p-2 rounded-lg text-gray-700"
                        >
                            {item}
                        </li>
                    ))
                ) : (
                    <li className="text-blue-500 text-center">
                        No se encontraron resultados
                    </li>
                )}
            </ul>
        </div>
    )

}

export default Ejercicio1;