import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { db } from '../services/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email !== emailConfirmacion) {
            alert("Los correos electrónicos no coinciden")
            return
        }

        const orden = {
            comprador: {
                nombre,
                telefono,
                email
            },
            items: cart,
            total: total,
            fecha: new Date()
        }

        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, orden)
            .then(({ id }) => {
                setOrdenId(id)
                clearCart()
            })
            .catch((error) => console.log(error))
    }

    if (ordenId) {
        return (
            <div className="container mt-5 text-center">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: <strong>{ordenId}</strong></p>
                <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Finalizar Compra</h2>

            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label className="form-label">Nombre y Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirmar Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={emailConfirmacion}
                        onChange={(e) => setEmailConfirmacion(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success w-100"
                    disabled={!nombre || !telefono || !email || !emailConfirmacion}
                >
                    Generar Orden
                </button>
            </form>
        </div>
    )
}

export default Checkout
