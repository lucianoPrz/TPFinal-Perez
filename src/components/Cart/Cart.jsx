import {useContext} from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if (cantidadTotal === 0){
        return (
            <>
                <h2 className='ms-3 my-3'>No hay productos en el carrito</h2>
                <Link to={"/"} className='btn btn-primary ms-3'> Ver Productos</Link>
            </>
        )
        
    }
  return (
    <div className='card'>
        <div className='card-body'>
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
        <h3> Total: $ {total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={vaciarCarrito} className='btn btn-danger me-2'> Vaciar Carrito</button>
        <Link to="/checkout" className='btn btn-success'>Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default Cart