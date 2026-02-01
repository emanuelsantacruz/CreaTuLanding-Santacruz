import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (
        <article className="card mb-3 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
            <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center justify-content-center bg-white p-3">
                    <img src={img} alt={name} className="img-fluid rounded-start" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-7">
                    <div className="card-body d-flex flex-column h-100 justify-content-center">
                        <header className="mb-3">
                            <h2 className="card-title">{name}</h2>
                        </header>
                        <section className="mb-4">
                            <p className="card-text text-muted mb-1">Categoría: {category}</p>
                            <h4 className="card-text fw-bold mb-3">Precio: ${price}</h4>
                            <p className="card-text">{description}</p>
                        </section>
                        <footer className="mt-auto">
                            {
                                quantityAdded > 0 ? (
                                    <Link to='/cart' className='btn btn-success d-block'>Terminar compra</Link>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                )
                            }
                        </footer>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail
