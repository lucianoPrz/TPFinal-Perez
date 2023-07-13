import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, orderBy } from "firebase/firestore"

const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")

    const handlerForm = (e) => {
        e.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Perfavor, complete todos los campos")
            return;
        }

        if (email != emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        const orden = {
            items: carrito.map( producto =>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };

        //Guardo orden en base de datos:
        addDoc(collection(db,"ordenes"), orden)
            .then(docRef =>{
                setOrderId(docRef.id);
                vaciarCarrito();
            })
            .catch(error=> {
                console.log("error al crear la orden", error)
                setError("Se produjon un error al crear la orden");
            })
    };

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={handlerForm}>
            {carrito.map(producto =>(
                <div key={producto.id}>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <p>Precio $ {producto.item.precio}</p>
                    <hr />
                </div>
            ))}
            <hr />
            
            <div>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>

                <label htmlFor="apellido">Apellido</label>
                <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>

                <label htmlFor="telefono">Telefono</label>
                <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <label htmlFor="emailConfirmacion">Email Confirmacion</label>
                <input type="email" value={emailConfirmacion} onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p style={{color:"red"}}> {error} </p>
            }

            <button type="submit">Finalizar Compra</button>
        </form>
        {
            orderId && (
                <p className="fw-bold">¡Gracias por tu compra! tu numero de es {orderId} </p>
            )
        }
    </div>
  )
}

export default Checkout