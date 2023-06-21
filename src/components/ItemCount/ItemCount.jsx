import { useState } from "react"

const ItemCount = ({inicial,stock, onAdd}) => {
    const [contador, setContador] = useState(inicial)
     //Stock maximo

    //Funciones para aumentar y disminuir el contador
    const incrementar = () => {
        contador < stock && setContador(contador + 1) 
    };

    const decrementar = () => {
        contador > inicial && setContador(contador - 1)
    };

  return (
    <div className="d-flex justify-content-center">
        <button onClick={decrementar} type="button" className="btn btn-outline-primary">-</button>
        <p className="px-5 fw-bold"> {contador} </p>
        <button onClick={incrementar} type="button" className="btn btn-outline-primary">+</button>

        <button className="ms-3 btn btn-success" onClick={() => stock > 0 && onAdd(contador)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount