import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1)
    const maximo = 10 //Stock maximo

    //Funciones para aumentar y disminuir el contador
    const incrementar = () => {
        contador < 10 ? setContador(contador + 1) : setContador(contador)
    };

    const decrementar = () => {
        contador > 1 ? setContador(contador - 1) : setContador(contador)
    };

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <p> {contador} </p>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount