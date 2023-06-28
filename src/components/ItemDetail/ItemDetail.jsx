import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='card w-75 d-flex container-fluid m-3'>
      <div className="card-body d-flex flex-column">
        <h2 className='card-title'>Nombre: {nombre}</h2>
        <h3 className='card-title'>Precio: $ {precio}</h3>
        <h3 className='card-title'>ID: {id}</h3>
        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi dolores culpa iure suscipit aliquam dolore natus voluptatum fuga eius magni, illo eos dolorum et fugiat. Itaque inventore quo dolorum?</p>
      </div>
      <img src={img} alt={nombre} className='img card-img-top w-50 m-3' />
    </div>
  )
}

export default ItemDetail