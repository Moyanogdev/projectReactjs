import { useEffect, useState } from "react" 
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { getProducts, getProductsByCategory } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setCargando(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    }, [categoryId])

    if (cargando) {
        return (
            <div className='center'>
                <h1 className="mt-5">Loading...</h1>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    return (
        <div>
            <h1 className="title mt-5">Hardfire Gamingshop</h1>
            <h2 className="title text-danger">Productos</h2>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer