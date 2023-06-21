import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"
import { getProductos } from "../../asyncmock"

const ItemListContainer = ({gretting}) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
      .then( respuesta => setProductos(respuesta) )
  }, [])

  const onAdd = (cantidad) => {
    console.log(cantidad)
  };

  return (
    <div>
      <h2 className="text-center py-2"> {gretting} </h2>
      <h2>Mis productos: </h2>
      <ItemList productos={productos}/>
      <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer