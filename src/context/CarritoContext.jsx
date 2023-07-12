import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    console.log(carrito);

    // Funcion agregar al carrito:

    const agregarProducto = (item, cantidad) => {
        const existeProducto = carrito.find( prod => prod.item.id === item.id)

        if (!existeProducto) {
            setCarrito(prev => [...prev, {item, cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const carritoActualizado = carrito.map ( prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => (item.precio * cantidad))
        }
    };

    // Funcion agregar elimianr producto del carrito

    const eliminarProducto = (id) => {
        const productoEliminar = carrito.find(producto => producto.item.id === id)
        const carritoActualizado = carrito.filter( producto => producto.item.id !== id)
        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminar.cantidad)
        setTotal(prev => prev - (productoEliminar.item.precio * productoEliminar.cantidad))
    
    };

    // Funcion para vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    };

    return (
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )

};
