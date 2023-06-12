import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer gretting= {"Bienvenido"}/>
    <ItemCount inicial={1} stock={10}/>
    </>
  )
}

export default App