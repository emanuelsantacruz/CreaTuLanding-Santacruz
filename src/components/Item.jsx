import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
                <header className="card-header bg-white border-0 pt-3">
                    <h5 className="card-title text-center text-truncate">{name}</h5>
                </header>
                <div className="card-body text-center">
                    <img src={img} alt={name} className="img-fluid rounded" style={{ maxHeight: '200px', objectFit: 'contain' }} />
                </div>
                <footer className="card-footer bg-white border-0 pd-3">
                    <p className="card-text text-center fw-bold mb-1">Precio: ${price}</p>
                    <p className="card-text text-center text-muted small mb-3">Stock disponible: {stock}</p>
                    <div className="d-grid gap-2">
                        <Link to={`/item/${id}`} className="btn btn-dark">Ver detalle</Link>
                    </div>
                </footer>
            </div>
        </article>
    )
}

export default Item
