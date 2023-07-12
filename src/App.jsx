import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer gretting={"Bienvenido"} />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer gretting={"Bienvenido"} />} />
            <Route path="/item/:idItem" element={< ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<h2>Pagina en construccion</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </>
  );
};

export default App;
