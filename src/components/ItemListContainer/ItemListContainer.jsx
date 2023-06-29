import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({gretting}) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const mostrarProductos = idCategoria ? getProductosPorCategoria : getProductos;

    mostrarProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error));

    
  }, [idCategoria])

  const onAdd = (cantidad) => {
    console.log(cantidad)
  };

  return (
    <div>
      <h2 className="text-center py-2 m-auto"> {gretting} </h2>
      <h2 className="me-auto">Mis productos: </h2>
      <ItemList productos={productos}/>
      {
        //<ItemCount inicial={1} stock={10} onAdd={onAdd}/>
      }
    </div>
  )
}

export default ItemListContainer