import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light" style={{ backgroundColor: "#ffe6f0" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/img/logo.png" alt="LeParfum ARG" width="80" className="d-inline-block align-text-top" />
                </a>

                <div className="collapse navbar-collapse justify-content-between show" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
