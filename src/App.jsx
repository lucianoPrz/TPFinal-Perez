import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer gretting={"Bienvenido"} />} />
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer gretting={"Bienvenido"} />} />
          <Route path="/item/:idItem" element = {< ItemDetailContainer />} />
          <Route path="*" element = {<h2>Sección en Contrucción</h2>} /> 
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
