import { useState } from "react"

const ItemCount = ({inicial,stock}) => {
    const [contador, setContador] = useState(inicial)
     //Stock maximo

    //Funciones para aumentar y disminuir el contador
    const incrementar = () => {
        contador < stock ? setContador(contador + 1) : setContador(contador)
    };

    const decrementar = () => {
        contador > inicial ? setContador(contador - 1) : setContador(contador)
    };

  return (
    <div className="d-flex justify-content-center">
        <button onClick={decrementar} type="button" class="btn btn-outline-primary">-</button>
        <p className="px-5 fw-bold"> {contador} </p>
        <button onClick={incrementar} type="button" class="btn btn-outline-primary">+</button>

        <button className="ms-3 btn btn-success">Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount