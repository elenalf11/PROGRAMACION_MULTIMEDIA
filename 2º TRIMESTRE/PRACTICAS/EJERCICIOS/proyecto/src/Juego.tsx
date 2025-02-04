import { useState } from "react";

// Define el tipo de las casillas
type SquareValue = "X" | "O" | null;

// Define la interfaz para las props de Square
interface SquareProps{
    value: SquareValue;
    // Funcion que no recibe argumentos y no devuelve ningun valor (void)
    onClick: () => void;
}

// ---------------------------------- Componente Square ------------------------------------------
function Square (props: SquareProps){
    return (
        <button
            onClick={props.onClick}
            className="flex justify-center items-center border-gray-400 border w-20 h-20 font-bold text-2xl"
        >
            {props.value}
        </button>
    );
}

// Define la interfaz para los estados de Board
interface BoardState{
    square: SquareValue[];
    isNext: boolean;
}

// ---------------------------- Componente Board -------------------------------------------------
// La funcion Board no recibe la interfaz BoardSate como parametro porque utiliza el estado int
// del componente con los hooks useState para manejar los valores de squares y isNext
function Board(){
    const [square, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [isNext, setIsNext] = useState<boolean>(true);

    function handleClick(index: number):
    if (squares[index] || calculateWinner(squares))
        return console.log("Hay una casilla ocupada o ya hay ganador");
    squares[index] = isNext ? "X" : "O";
    setIsNext(!isXNext);
}

const winner = calculateWinner()
