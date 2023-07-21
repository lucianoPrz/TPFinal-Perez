import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div className="card">
    <div className="card-body">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p> Precio: {item.precio}</p>
        <button onClick={()=>eliminarProducto(item.id)} className="btn btn-danger">Eliminar</button>
        <hr />
    </div>
    </div>
  )
}

export default CartItem