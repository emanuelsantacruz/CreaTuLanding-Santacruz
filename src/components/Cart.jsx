import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="container mt-5 text-center">
                <h2>No hay productos en el carrito</h2>
                <p className="lead mt-3">¡Agrega algunos perfumes para continuar!</p>
                <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Tu Carrito de Compras</h1>

            {cart.map(item => (
                <CartItem key={item.id} {...item} />
            ))}

            <div className="card mt-4 p-3 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="mb-0">Total: ${total}</h3>
                    <h4 className="mb-0 text-muted">Items: {totalQuantity}</h4>
                </div>

                <div className="d-flex justify-content-between">
                    <button onClick={() => clearCart()} className="btn btn-outline-danger">
                        Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="btn btn-success">
                        Proceder al pago
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
