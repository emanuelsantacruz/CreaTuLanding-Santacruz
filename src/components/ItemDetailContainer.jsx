import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { db } from '../services/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then(res => {
                const data = res.data()
                const productFormatted = { id: res.id, ...data }
                setProduct(productFormatted)
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
            {loading ? <Loader /> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer
