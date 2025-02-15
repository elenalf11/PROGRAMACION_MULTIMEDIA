import { useState } from "react";

// Define el tipo de las casillas
type SquareValue = "X" | "O" | null;

// Interfaz de Square
interface SquareProps{
    square: SquareValue;
    
    
}
	// Aqui va codigo
// --------------------------------- Componente Square ---------------------------------
	// Aqui va codigo


interface BoardState {
  squares: SquareValue[];
  isXNext: boolean;
}
// --------------------------------- Componente Board ---------------------------------
function Board() {

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
	// Aqui va codigo
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

function Ejercicio1() {
  return <TicTacToe />;
}

export default Ejercicio1;