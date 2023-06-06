import './CartWidget.css'

const CartWidget = () => {
  
    const imgCarrito = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-jaune.png"
    return (
    <div className='d-flex align-items-end'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <strong>10</strong>
    </div>
  )
}

export default CartWidget