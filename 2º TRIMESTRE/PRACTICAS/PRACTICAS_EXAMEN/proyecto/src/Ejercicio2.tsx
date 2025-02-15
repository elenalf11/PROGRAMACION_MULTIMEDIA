import { useState } from "react";

function Ejercicio2(){
    const [celsius, setCelsius] = useState<string>("");
    const [fahrenheit, setFahrenheit] = useState<string>("");

    function handleCelsiusChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setCelsius(value);
        if (value !== ""){
            const fahrenheitValue = (parseFloat(value) * 9) / 5 + 32;
            setFahrenheit(fahrenheitValue.toString());
        } else{
            setFahrenheit("");
        }
    }

    function handleFahrenheitChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setFahrenheit(value);
        if (value !== ""){
            const celsiusValue = ((parseFloat(value) - 32) * 5) / 9;
            setCelsius(celsiusValue.toString());
        } else{
            setCelsius("");
        }
    }

    return(
        <div className="mx-auto p-4 max-w-md">
            <h1 className="mb-6 font-bold text-2xl text-center"> Conversor de Temperatura</h1>
            <div className="space-y-6">
                {/*Celsius Input */}
                <div className="flex flex-col items-start">
                    <label htmlFor="celsius" className="mb-1 font-medium">Celsius: </label>
                    <input 
                       id="celsius"
                       type="number"
                       value={celsius}
                       onChange={handleCelsiusChange}
                       className="p-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                       placeholder="Introduce la temperatura en °C"
                    />
                </div>

                {/* Fahrenheit Input */}
                <div className="flex flex-col items-start">
                    <label htmlFor="fahrenheit" className="mb-1 font-medium">
                    Fahrenheit:
                    </label>
                    <input
                        id="fahrenheit"
                        type="number"
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                        className="p-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        placeholder="Introduce la temperatura en Fº"
                    />
                </div>
            </div>
        </div>
    )
}

export default Ejercicio2;