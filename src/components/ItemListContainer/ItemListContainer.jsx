import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
//import ItemCount from "../ItemCount/ItemCount"
//import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
//Funciones para firebase
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = ({gretting}) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then( res => {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))

  },[idCategoria])

  // useEffect(() => {

  //   const mostrarProductos = idCategoria ? getProductosPorCategoria : getProductos;

  //   mostrarProductos(idCategoria)
  //     .then(res => setProductos(res))
  //     .catch(error => console.log(error));

    
  // }, [idCategoria])

  // const onAdd = (cantidad) => {
  //   console.log(cantidad)
  // };

  return (
    <div>
      <h2 className="text-center py-2 m-auto"> {gretting} </h2>
      <h2 style={{ textAlign: "center"}}>Mis productos </h2>
      <ItemList productos={productos}/>
      {
        //<ItemCount inicial={1} stock={10} onAdd={onAdd}/>
      }
    </div>
  )
}

export default ItemListContainer