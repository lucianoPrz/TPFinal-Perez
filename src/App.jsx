import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer gretting= {"Bienvenido"}/>
    <ItemDetailContainer/>
    
    </>

  )
}

export default App