import { useState, useEffect } from "react"
import { getUnProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() =>{
        getUnProduct(1)
            .then(res => setProducto(res))
    })



  return (
    <ItemDetail {...producto}/>
  )
}

export default ItemDetailContainer