import { useState } from "react";

// Define el tipo de las casillas
type SquareValue = "X" | "O" | null;

// Define la interfaz para las props de Square
interface SquareProps {
  value: SquareValue;
  // Función que no recibe argumentos y no devuelve ningún valor (void)
  onClick: () => void;
}

// --------------------------------- Componente Square ---------------------------------
function Square(props: SquareProps) {
  return (
    <button
      onClick={props.onClick}
      className="flex justify-center items-center border border-gray-400 w-20 h-20 font-bold text-2xl"
    >
      {props.value}
    </button>
  );
}

// Define la interfaz para los estados de Board
interface BoardState {
  squares: SquareValue[];
  isXNext: boolean;
}
// --------------------------------- Componente Board ---------------------------------
// La función Board no recibe la interfaz BoardState como parámetro porque utiliza el estado interno
// del componente con los hooks useState para manejar los valores de squares y isXNext.
function Board() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  function handleClick(index: number) {
    if (squares[index] || calculateWinner(squares))
      return console.log("Hay una casilla ocupada o ya hay ganador");
    squares[index] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Ganador: ${winner}`
    : `Siguiente jugador: ${isXNext ? "X" : "O"}`;

  // winner X O null

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 font-semibold text-lg">{status}</div>
      <div className="gap-1 grid grid-cols-3">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
        className="bg-blue-500 hover:bg-blue-600 mt-4 p-2 rounded text-white"
      >
        Reiniciar
      </button>
    </div>
  );
}

// --------------------------------- Función que calcula el ganador ---------------------------------
function calculateWinner(squares: SquareValue[]): SquareValue {
  const combinations = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila central
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna central
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundaria
  ];

  for (let combination of combinations) {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// --------------------------------- Componente principal ---------------------------------
function TicTacToe() {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <Board />
    </div>
  );
}

function Juego() {
  return <TicTacToe />;
}

export default Juego;