import { useState } from "react";

interface listProps{
    id: number
    text: string
}

function ListaTareas(){

    const [listaTareas, setListaTareas] = useState<listProps[]>([]);
    const [tarea, setTarea] = useState<string>("");
    const [contadorId, setContadorId] = useState<number>(1);

    function agregarTarea(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(tarea.trim() != ""){
            const nuevaTarea: listProps = {
                id: contadorId,
                text: tarea.trim(),
            };

            setListaTareas([...listaTareas, nuevaTarea]);

            setContadorId(contadorId + 1);

            setTarea("");
        }
    }

    function manejarCambio(e: React.ChangeEvent<HTMLInputElement>){
        setTarea(e.target.value);
    }

    function eliminarTarea(id: number){
        const nuevasTareas = listaTareas.filter(tarea => tarea.id != id);

        setListaTareas(nuevasTareas);
    }

    return(
        <div>
            <h2>Lista de Tareas</h2>

            {/*Formulario para agregar tareas */}
            <form onSubmit={agregarTarea}>
                <input 
                    type="text" 
                    value={tarea}
                    onChange={manejarCambio}
                    placeholder="Escribe una tarea..."
                />
                <button type="submit">Agregar</button>
            </form>

            {/*Lista de tareas */}
            <ul>
                {listaTareas.map((t) =>
                    <li key={t.id}>
                        {t.id}. {t.text}
                        <button onClick={() => eliminarTarea(t.id)}>Eliminar</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ListaTareas;