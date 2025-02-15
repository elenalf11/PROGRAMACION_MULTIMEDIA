import { useState } from "react";

const [celsius, setCelsius] = useState<string>("");
const [fahrenheit, setFahrenheit] = useState<string>("");

function Ejercicio2(){
     
    function handleInputCelsius(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        if(value != ""){
            const fahrenheitValue = (parseFloat(value) + 32);
            setFahrenheit(fahrenheitValue.toString());
        } else{
            setFahrenheit("");
        }
    }

    function handleInputFahrenheit(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        if(value != ""){
            const celsiusValue = (parseFloat(value) - 32)
            setCelsius(celsiusValue.toString());
        } else{
            setCelsius("");
        }
    }

    return(
        <div>
            <div>
                <h2>Conversor de Temperaturas</h2>
                <div>
                    <label htmlFor="celsius">Celsius: </label>
                    <input 
                        id = "celsius"
                        type="text" 
                        value={celsius}
                        onChange={handleInputCelsius}
                        placeholder="Escribe aquí en grados Cº"
                    />
                </div>
                <div>
                    <label htmlFor="fahrenheit"></label>
                    <input 
                        id = "fahrenheit"
                        type="text" 
                        value={fahrenheit}
                        onChange={handleInputFahrenheit}
                        placeholder="Escribe aquí en grados Fº"
                    />
                </div>
            </div>
        </div>
    );
}

export default Ejercicio2;