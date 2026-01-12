const CartWidget = () => {
    return (
        <div className="cart-widget position-relative d-inline-flex align-items-center">
            <i className="bi bi-cart3 fs-4 text-dark"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
            </span>
        </div>
    );
};

export default CartWidget;
