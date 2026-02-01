import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../data/asyncMock'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">{greeting}</h1>
            {loading ? <p className="text-center fs-4">Cargando productos...</p> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer
