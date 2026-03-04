import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, name, price, quantity, img }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="card mb-3 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
            <div className="row g-0 align-items-center">
                <div className="col-md-3 p-2 text-center">
                    <img src={img} alt={name} className="img-fluid rounded" style={{ maxHeight: '100px' }} />
                </div>
                <div className="col-md-4">
                    <div className="card-body py-2">
                        <h5 className="card-title mb-1">{name}</h5>
                        <p className="card-text text-muted mb-0">Precio unitario: ${price}</p>
                    </div>
                </div>
                <div className="col-md-2 text-center">
                    <p className="mb-0 fw-bold">Cant: {quantity}</p>
                </div>
                <div className="col-md-2 text-center">
                    <p className="mb-0 fw-bold text-success">Subtotal: ${price * quantity}</p>
                </div>
                <div className="col-md-1 text-center">
                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(id)}>
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
