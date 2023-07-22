import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")

    const handlerForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Perfavor, complete todos los campos")
            return;
        }

        if (email != emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }





        const orden = {
            items: carrito.map(producto => ({
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


        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                // obtengo una referencia por cada prod en la coleccion
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, { stock: stockActual - productoOrden.cantidad })

            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrderId(docRef.id)
                        vaciarCarrito();
                    })
                    .catch((err) => {
                        console.log("Error al crear la orden", err)
                        setError("Error al crear la orden, vuelva a intentar en unos minutos.")
                    })
            })
            .catch((err) => {
                console.log("Error al actualizar el stock", err)
                setError("Error al actualizar el stock. Intente nuevamente")
            })
    }

    return (
        <div className="container-fluid w-75 d-flex flex-column my-1">
            <h2>Checkout</h2>
            <form onSubmit={handlerForm} className="my-auto">
                {carrito.map(producto => (
                    <div key={producto.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio $ {producto.item.precio}</p>
                        <hr />
                    </div>
                ))}
                <hr />
                <h3> Total: $ {total}</h3>
                <hr />

                <div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailConfirmacion" className="form-label">Email Confirmacion</label>
                        <input type="email" className="form-control" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
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