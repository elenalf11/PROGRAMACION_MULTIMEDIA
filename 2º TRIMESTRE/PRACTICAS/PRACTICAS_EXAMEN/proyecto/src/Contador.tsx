import { useState } from "react";

function Contador() {
    const [count, setCount] = useState<number>(0); // Estado del contador
  const [history, setHistory] = useState<number[]>([]); // Estado para almacenar el historial

  // Incrementar el contador y agregar el valor al historial
  function handleIncrement() {
    let newCount = count + 1;
    setCount(newCount);
    setHistory([newCount]);
  }

  // Reiniciar el contador y el historial
  function handleReset() {
    setCount(0);
    setHistory([]);
  }

  return (
    <div className="mx-auto p-4 max-w-md">
      <h1 className="mb-6 font-bold text-2xl text-center">
        Contador con Historial
      </h1>
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-xl">Valor Actual: {count}</h2>
        <button
          onClick={handleIncrement}
          className="bg-blue-500 hover:bg-blue-600 mr-2 px-6 py-2 rounded-lg text-white transition"
        >
          Incrementar
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition"
        >
          Reiniciar
        </button>
      </div>
      <div>
        <h3 className="mb-2 font-medium text-lg">Historial:</h3>
        {history.length > 0 ? (
          <ul className="space-y-1">
            {history.map((value, index) => (
              <li
                key={index}
                className="bg-gray-100 shadow-sm p-2 rounded-lg text-gray-700"
              >
                {value}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">El historial está vacío</p>
        )}
      </div>
    </div>
  );
}

export default Contador;



