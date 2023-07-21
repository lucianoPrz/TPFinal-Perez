import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
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


  return (
    <div>
      <h3 className="text-center py-2 m-auto"> {gretting} </h3>
      <h4 style={{ textAlign: "center"}}>Mis productos </h4>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer