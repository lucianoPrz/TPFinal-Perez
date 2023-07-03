import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad)

  };


  return (
    <div className='card w-75 d-flex container-fluid m-3'>
      <div className="card-body d-flex flex-column">
        <h2 className='card-title'>Nombre: {nombre}</h2>
        <h3 className='card-title'>Precio: $ {precio}</h3>
        <h3 className='card-title'>ID: {id}</h3>
        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi dolores culpa iure suscipit aliquam dolore natus voluptatum fuga eius magni, illo eos dolorum et fugiat. Itaque inventore quo dolorum?</p>
      </div>
      <img src={img} alt={nombre} className='img card-img-top w-50 m-3' />
      {
        agregarCantidad > 0 ? (<Link to="/cart" className="ms-3 btn btn-success"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} onAdd={handlerCantidad} />)
      }
    </div>
  )
}

export default ItemDetail