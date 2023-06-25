import { Link } from 'react-router-dom'
import './Item.css'


// eslint-disable-next-line react/prop-types
const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='card col-sm-12 col-md-6 col-lg-2 mx-3 my-1'>
        <img src={img} className='card-img-top' alt={nombre} />
        <div className="card-body d-flex flex-column">
          <h3 className='card-title'>{nombre}</h3>
          <p className='card-text'>Precio: ${precio}</p>
          <p className='card-text'>ID: {id}</p>
          <Link to={`/item/${id}`} className='btn btn-primary'> Ver Detalles </Link>
        </div>
    </div>
  )
}

export default Item