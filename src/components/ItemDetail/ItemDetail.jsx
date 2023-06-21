import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi dolores culpa iure suscipit aliquam dolore natus voluptatum fuga eius magni, illo eos dolorum et fugiat. Itaque inventore quo dolorum?</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail