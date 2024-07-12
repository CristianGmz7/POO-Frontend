//Recordar poner npm run dev para inicializar el proyecto

import { useState } from "react";

//App es el componente de entrada principal o Main
export const App = () => {

  //crear custom hook
  //const [nombreVariable, nombreFunción] = useState(tipo de dato o valor);
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>Mi Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <p>Hola</p>
    </div>
  );
  //dentro de onClick se llama una función o se hace mediante una funcion anonima
};