import CartWidget from "./CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light" style={{ backgroundColor: "#ffe6f0" }}>
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <img src="/img/logo.png" alt="LeParfum ARG" width="80" className="d-inline-block align-text-top" />
                </Link>

                <div className="collapse navbar-collapse justify-content-between show" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/mujer' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Mujer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/hombre' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Hombre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/unisex' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Unisex</NavLink>
                        </li>
                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
