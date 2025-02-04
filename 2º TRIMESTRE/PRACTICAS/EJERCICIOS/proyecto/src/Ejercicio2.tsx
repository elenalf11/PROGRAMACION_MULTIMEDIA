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
            <h1 className="mb-6 font-bold text-2xl center text"> Conversor de Temperatura</h1>
            <div className="space-y-6">
                {/*Celsius Input */}
                <div className="flex flex-col items-start">
                    <label htmlFor="celsius" className="font-medium"></label>
                </div>
            </div>
        </div>
    )
}

export default Ejercicio2;