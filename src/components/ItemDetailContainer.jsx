import { useState, useEffect } from 'react'
import { getProductById } from '../data/asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="container mt-4">
            {loading ? <p className="text-center fs-4">Cargando detalle...</p> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer
