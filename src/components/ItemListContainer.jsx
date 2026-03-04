import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { db } from '../services/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // Usamos la misma sintaxis de la clase para filtrar o traer todo
        const misProductos = categoryId
            ? query(collection(db, "productos"), where("category", "==", categoryId))
            : collection(db, "productos")

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(nuevosProductos)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">{greeting}</h1>
            {loading ? <Loader /> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer
