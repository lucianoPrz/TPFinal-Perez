import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
     const {cantidadTotal} = useContext(CarritoContext)
    const imgCarrito = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-jaune.png"

    return (
    <div className='d-flex align-items-end'>
        <Link to={"/cart"}>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            {
              cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }
        </Link>







        
    </div>
  )
}

export default CartWidget