import { useState } from 'react';
import './App.css'
import Boton from './Boton';

/* Ejemplo 2 (Ejemplo de iteración)
const products = [
    {title: 'Col', isFruit: false, id: 1},
    {title: 'Ajo', isFruit: false, id: 2},
    {title: 'Manzana', isFruit: true, id: 3}
];
*/

function App() {
    

    /* Ejemplo 1 (Diferentes webs en función de un valor)
    let content;
    let estado = 1;
    if (estado === 1) {
      content = <UserPanel />;
    } else {
      content = <AdminPanel />;
    }
  
    return (
      <div>
        {content}
      </div>
    );
    */


    /* Ejemplo 2 (Ejemplo de iteración)
    const listItems = products.map((product) => (
        <li
          key={product.id}
          className="flex justify-between items-center text-red-400"
        >
          {product.title}
        </li>
      ));
    
      return (
        <div>
          <ul className="bg-cyan-300">{listItems}</ul>
        </div>
      );
   */
    const [count, setCount] = useState(0);

    function handleClick(){
          setCount(count + 1);
    }

  return(
    <div>
      <h1>Contadores que se actualizan juntos</h1>
      <Boton count={count} onClick={handleClick} />
      <Boton count={count} onClick={handleClick} />
    </div>
  );

  } 

  
    
  
  export default App;
