import { useParams } from 'react-router-dom'
import { Ring } from '@uiball/loaders'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { getProducts } from '../../services/firebase/firestore/products'
import useAsync from '../Hooks/useAsync.js'


const ItemListContainer = () => {

    const { categoryId } = useParams()
    const getProductsWithCategory = () => getProducts(categoryId)

    const { data : products, error, cargando } = useAsync(getProductsWithCategory, [categoryId])

    if (cargando) {
        return (
            <div className='center py-5 mb-5'>
                <h1 className="cargando">LOADING...</h1>
                <Ring size={50} speed={2} color="black" className="center" />
            </div>
        )
    }

    if (error) {
        console.log(error)
        return (
            <div className='center'>
                <h1> Lo sentimos, ha ocurrido un error</h1>
            </div>
        )
    }
    return (
        <div className='container-lg'>
            <div className='row justify-content-center text-center'>
                {!categoryId}
                <h1 className="title mt-5">HARDFIRE GAMINGSHOP</h1>
                <h2 className="title text-danger">Productos</h2>
                <ItemList products={products} />
            </div>
        </div>
    )
}
export default ItemListContainer