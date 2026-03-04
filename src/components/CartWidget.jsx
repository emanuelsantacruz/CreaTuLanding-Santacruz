import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="cart-widget position-relative d-inline-flex align-items-center text-decoration-none">
            <i className="bi bi-cart3 fs-4 text-dark" style={{ cursor: "pointer" }}></i>

            {totalQuantity > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
};

export default CartWidget;
